import { subDays, addDays } from 'date-fns';

import BaseCalendar from './BaseCalendar';

export default class DayCalendar extends BaseCalendar {
  constructor(referenceDate: Date = new Date()) {
    super(referenceDate);
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

  getNext(step = 1): DayCalendar {
    return new DayCalendar(addDays(this.referenceDate, step));
  }

  getAgo(step = 1): DayCalendar {
    return new DayCalendar(subDays(this.referenceDate, step));
  }
}
