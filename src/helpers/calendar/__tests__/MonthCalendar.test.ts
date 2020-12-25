import {
  startOfMonth, addWeeks, subMonths, addMonths,
} from 'date-fns';

import { assertMonthWeeksCalendar, getWeekDays } from './utils';

import MonthCalendar from '../MonthCalendar';

describe('MonthCalendar', () => {
  const getWeeksInMonth = (referenceDate: Date): Date[][] => {
    const beginOfMonth = startOfMonth(referenceDate);
    return [
      getWeekDays(beginOfMonth),
      getWeekDays(addWeeks(beginOfMonth, 1)),
      getWeekDays(addWeeks(beginOfMonth, 2)),
      getWeekDays(addWeeks(beginOfMonth, 3)),
      getWeekDays(addWeeks(beginOfMonth, 4)),
    ];
  };

  describe('for a given reference date', () => {
    const today = new Date();
    const monthCalendar = new MonthCalendar(today);

    it('should be able to return weeks for current month', () => {
      const monthWeeks = getWeeksInMonth(today);
      const currentMonthWeeks = monthCalendar.getWeeks();
      assertMonthWeeksCalendar(currentMonthWeeks, monthWeeks);
    });

    it('should be able to return weeks for forward nth month', () => {
      const monthWeeks = getWeeksInMonth(addMonths(today, 1));
      const nextMonthWeeks = monthCalendar.getNext().getWeeks();
      assertMonthWeeksCalendar(nextMonthWeeks, monthWeeks);
    });

    it('should be able to return weeks for backward nth month', () => {
      const monthWeeks = getWeeksInMonth(subMonths(today, 1));
      const lastMonthWeeks = monthCalendar.getAgo().getWeeks();
      assertMonthWeeksCalendar(lastMonthWeeks, monthWeeks);
    });
  });
});
