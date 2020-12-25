import { addWeeks, subWeeks } from 'date-fns';
import { assertWeekDaysCalendar, getWeekDays } from './utils';

import WeekCalendar from '../WeekCalendar';

describe('WeekCalendar', () => {
  describe('for a given reference date', () => {
    const today = new Date();
    const weekCalendar = new WeekCalendar(today);

    it('should be able to return current week days', () => {
      const weekDates = getWeekDays(today);
      const currentWeekDays = weekCalendar.getDays();
      assertWeekDaysCalendar(currentWeekDays, weekDates);
    });

    it('should be able to return forward nth week days', () => {
      const weekDates = getWeekDays(addWeeks(today, 1));
      const nextWeekDays = weekCalendar.getNext().getDays();
      assertWeekDaysCalendar(nextWeekDays, weekDates);
    });

    it('should be able to return backward nth week days', () => {
      const weekDates = getWeekDays(subWeeks(today, 1));
      const lastWeekDays = weekCalendar.getAgo().getDays();
      assertWeekDaysCalendar(lastWeekDays, weekDates);
    });
  });
});
