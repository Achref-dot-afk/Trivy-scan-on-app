
import React, { useState } from 'react';
import axios from 'axios';

const ScheduleForm = () => {
  const [dateCreation, setDateCreation] = useState('');
  const [numEmploye, setNumEmploye] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/schedules', { dateCreation, numEmploye })
      .then(response => {
        setDateCreation('');
        setNumEmploye('');
        // Reload or update the schedule list here
      })
      .catch(error => console.error('Error creating schedule:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="Creation Date"
        value={dateCreation}
        onChange={e => setDateCreation(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Employee ID"
        value={numEmploye}
        onChange={e => setNumEmploye(e.target.value)}
        required
      />
      <button type="submit">Add Schedule</button>
    </form>
  );
};

export default ScheduleForm;
