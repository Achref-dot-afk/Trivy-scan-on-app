
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScheduleForm from './ScheduleForm';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios.get('/api/schedules')
      .then(response => setSchedules(response.data))
      .catch(error => console.error('Error fetching schedules:', error));
  }, []);

  return (
    <div>
      <h2>Schedules</h2>
      <ScheduleForm />
      <ul>
        {schedules.map(schedule => (
          <li key={schedule.numAgenda}>{schedule.dateCreation}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
