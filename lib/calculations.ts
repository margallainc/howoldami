export interface AgeBreakdown {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface LifeStats {
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  totalWeeks: number;
  heartbeats: number;
  breaths: number;
  timesSlepped: number;
  hoursSlepped: number;
}

export function calculateExactAge(birthDate: Date, now: Date): AgeBreakdown {
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds };
}

export function calculateLifeStats(birthDate: Date, now: Date): LifeStats {
  const diffMs = now.getTime() - birthDate.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);

  const heartbeats = Math.floor(totalSeconds * (70 / 60));
  const breaths = Math.floor(totalSeconds * (16 / 60));
  const timesSlepped = totalDays;
  const hoursSlepped = Math.floor(totalDays * 8);

  return {
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    totalWeeks,
    heartbeats,
    breaths,
    timesSlepped,
    hoursSlepped,
  };
}

export function getDayOfWeekBorn(birthDate: Date): string {
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return dayNames[birthDate.getDay()];
}

export function getNextBirthday(birthDate: Date, now: Date): { daysUntil: number; hoursUntil: number; minutesUntil: number; turningAge: number } {
  let nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (nextBirthday.getTime() <= now.getTime()) {
    nextBirthday = new Date(now.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());
  }

  const diffMs = nextBirthday.getTime() - now.getTime();
  const daysUntil = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hoursUntil = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesUntil = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const turningAge = nextBirthday.getFullYear() - birthDate.getFullYear();

  return { daysUntil, hoursUntil, minutesUntil, turningAge };
}

export function getLifeProgress(birthDate: Date, now: Date, lifeExpectancy: number): number {
  const diffMs = now.getTime() - birthDate.getTime();
  const yearsLived = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.min((yearsLived / lifeExpectancy) * 100, 100);
}

export function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}

export function isValidBirthDate(date: Date): { valid: boolean; error?: string } {
  const now = new Date();
  if (date.getTime() > now.getTime()) {
    return { valid: false, error: 'Birth date cannot be in the future.' };
  }
  if (date.getFullYear() < 1900) {
    return { valid: false, error: 'Please enter a date after 1900.' };
  }
  if (isNaN(date.getTime())) {
    return { valid: false, error: 'Please enter a valid date.' };
  }
  return { valid: true };
}
