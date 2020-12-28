import { subDays, addDays } from 'date-fns';

import BaseCalendar from './BaseCalendar';

export default class DayCalendar extends BaseCalendar {
  constructor(referenceDate: Date = new Date()) {
    super(referenceDate);
  }

  getNext(step = 1): DayCalendar {
    return new DayCalendar(addDays(this.referenceDate, step));
  }

  getAgo(step = 1): DayCalendar {
    return new DayCalendar(subDays(this.referenceDate, step));
  }
}
