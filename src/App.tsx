import { useEffect } from 'react';
import './App.scss';

import MonthCalendar from './helpers/calendar/MonthCalendar';

function App(): null {
  useEffect(() => {
    const monthCalendar = new MonthCalendar();
    monthCalendar.getNext().getWeeks().forEach((w) => console.log(w.getDays()));
  }, []);

  return null;
}

export default App;
