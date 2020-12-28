export default class BaseCalendar {
  referenceDate: Date;

  constructor(referenceDate: Date) {
    if (!(referenceDate instanceof Date)) {
      throw new Error('Reference date should be a Date object');
    }
    this.referenceDate = referenceDate;
  }

  getWeekDay(): number {
    return this.referenceDate.getDay();
  }

  getMonthDay(): number {
    return this.referenceDate.getDate();
  }

  getMonth(): number {
    return this.referenceDate.getMonth();
  }

  getYear(): number {
    return this.referenceDate.getFullYear();
  }
}
