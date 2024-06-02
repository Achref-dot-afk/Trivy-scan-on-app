
import React, { useState } from 'react';
import axios from 'axios';

const AlertForm = () => {
  const [type, setType] = useState('');
  const [delais, setDelais] = useState('');
  const [numActivité, setNumActivité] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/alerts', { type, delais, numActivité })
      .then(response => {
        setType('');
        setDelais('');
        setNumActivité('');
        // Reload or update the alert list here
      })
      .catch(error => console.error('Error creating alert:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={e => setType(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Delays"
        value={delais}
        onChange={e => setDelais(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Activity ID"
        value={numActivité}
        onChange={e => setNumActivité(e.target.value)}
        required
      />
      <button type="submit">Add Alert</button>
    </form>
  );
};

export default AlertForm;
