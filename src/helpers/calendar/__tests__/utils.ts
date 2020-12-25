import { startOfWeek, addDays } from 'date-fns';

import DayCalendar from '../DayCalendar';
import WeekCalendar from '../WeekCalendar';

export const assertWeekDaysCalendar = (daysCalendar: DayCalendar[], weekDates: Date[]): void => {
  daysCalendar.forEach((
    day, dayOfWeek,
  ) => expect(day.getMonthDay()).toEqual(weekDates[dayOfWeek].getDate()));
};

export const assertMonthWeeksCalendar = (
  weeksCalendar: WeekCalendar[], monthWeekDates: Date[][],
): void => {
  weeksCalendar.forEach(
    (week, weekOfMonth) => assertWeekDaysCalendar(week.getDays(), monthWeekDates[weekOfMonth]),
  );
};

export const getWeekDays = (referenceDate: Date): Date[] => {
  const beginOfWeek = startOfWeek(referenceDate);
  return [
    beginOfWeek,
    addDays(beginOfWeek, 1),
    addDays(beginOfWeek, 2),
    addDays(beginOfWeek, 3),
    addDays(beginOfWeek, 4),
    addDays(beginOfWeek, 5),
    addDays(beginOfWeek, 6),
  ];
};
