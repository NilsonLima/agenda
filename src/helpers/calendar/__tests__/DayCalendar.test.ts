import { addDays, subDays } from 'date-fns';

import DayCalendar from '../DayCalendar';

describe('DayCalendar', () => {
  describe('for a given reference date', () => {
    const today = new Date();
    const dayCalendar = new DayCalendar(today);

    it('should be able to get forward nth date', () => {
      const tomorrow = addDays(today, 1);
      const tomorrowDayCalendar = dayCalendar.getNext();
      expect(tomorrowDayCalendar.getMonthDay()).toEqual(tomorrow.getDate());
    });

    it('should be able to get backward nth date', () => {
      const yesterday = subDays(today, 1);
      const yesterdayDayCalendar = dayCalendar.getAgo();
      expect(yesterdayDayCalendar.getMonthDay()).toEqual(yesterday.getDate());
    });
  });
});
