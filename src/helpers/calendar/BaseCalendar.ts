export default class BaseCalendar {
  referenceDate: Date;

  constructor(referenceDate: Date) {
    if (!(referenceDate instanceof Date)) {
      throw new Error('Reference date should be a Date object');
    }
    this.referenceDate = referenceDate;
  }
}
