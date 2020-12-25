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
});
