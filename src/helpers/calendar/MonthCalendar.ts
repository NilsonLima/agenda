import { startOfMonth, addMonths, subMonths } from 'date-fns';

import BaseCalendar from './BaseCalendar';
import WeekCalendar from './WeekCalendar';

export default class MonthCalendar extends BaseCalendar {
  startWeek: WeekCalendar;

  constructor(referenceDate: Date = new Date()) {
    super(referenceDate);
    this.startWeek = new WeekCalendar(startOfMonth(this.referenceDate));
  }

  getWeeks(): WeekCalendar[] {
    return [
      this.startWeek,
      this.startWeek.getNext(1),
      this.startWeek.getNext(2),
      this.startWeek.getNext(3),
      this.startWeek.getNext(4),
    ];
  }

  getNext(step = 1): MonthCalendar {
    return new MonthCalendar(addMonths(this.referenceDate, step));
  }

  getAgo(step = 1): MonthCalendar {
    return new MonthCalendar(subMonths(this.referenceDate, step));
  }
}
