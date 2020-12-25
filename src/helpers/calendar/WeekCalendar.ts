import { startOfWeek, addWeeks, subWeeks } from 'date-fns';

import BaseCalendar from './BaseCalendar';
import DayCalendar from './DayCalendar';

export default class WeekCalendar extends BaseCalendar {
  beginOfWeek: DayCalendar;

  constructor(referenceDate: Date = new Date()) {
    super(referenceDate);
    this.beginOfWeek = new DayCalendar(startOfWeek(this.referenceDate));
  }

  getDays(): DayCalendar[] {
    return [
      this.beginOfWeek,
      this.beginOfWeek.getNext(1),
      this.beginOfWeek.getNext(2),
      this.beginOfWeek.getNext(3),
      this.beginOfWeek.getNext(4),
      this.beginOfWeek.getNext(5),
      this.beginOfWeek.getNext(6),
    ];
  }

  getNext(step = 1): WeekCalendar {
    return new WeekCalendar(addWeeks(this.referenceDate, step));
  }

  getAgo(step = 1): WeekCalendar {
    return new WeekCalendar(subWeeks(this.referenceDate, step));
  }
}
