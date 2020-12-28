import BaseCalendar from '../BaseCalendar';

describe('BaseCalendar', () => {
  describe('when reference date is not instance of Date', () => {
    it('should throw an exception', () => {
      try {
        // eslint-disable-next-line no-new
        new BaseCalendar('2020-10-10');
      } catch (e) {
        expect(e.message).toEqual('Reference date should be a Date object');
      }
    });
  });

  describe('for a given reference date', () => {
    const today = new Date();
    const baseCalendar = new BaseCalendar(today);

    it('should be able to return its week day', () => {
      expect(baseCalendar.getWeekDay()).toEqual(today.getDay());
    });

    it('should be able to return its month day', () => {
      expect(baseCalendar.getMonthDay()).toEqual(today.getDate());
    });

    it('should be able to return its respective month', () => {
      expect(baseCalendar.getMonth()).toEqual(today.getMonth());
    });

    it('should be able to return its respective year', () => {
      expect(baseCalendar.getYear()).toEqual(today.getFullYear());
    });
  });
});
