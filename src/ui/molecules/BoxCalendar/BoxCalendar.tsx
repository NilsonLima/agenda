import MonthCalendar from '../../../helpers/calendar/MonthCalendar';

import { Text } from '../../atoms';
import { WEEK_DAYS, MONTHS } from './utils';

import './BoxCalendar.scss';

const BoxCalendar = () => {
  const monthCalendar = new MonthCalendar();
  return (
    <div className="box-calendar">
      <Text variant="subtitle1" className="box-calendar_title">
        {`${MONTHS[monthCalendar.getMonth()]} ${monthCalendar.getYear()}`}
      </Text>
      <div className="box-calendar_matrix">
        {WEEK_DAYS.map((weekDay) => (
          <div className="box-calendar_cell">
            <Text variant="overline" disabled>{weekDay}</Text>
          </div>
        ))}
        {monthCalendar
          .getWeeks()
          .map(
            (week) => week
              .getDays()
              .map((day) => {
                const disabled = monthCalendar.getMonth() !== day.getMonth();
                return (
                  <div className="box-calendar_cell">
                    <Text variant="overline" disabled={disabled}>{day.getMonthDay()}</Text>
                  </div>
                );
              }),
          )}
      </div>
    </div>
  );
};

export default BoxCalendar;
