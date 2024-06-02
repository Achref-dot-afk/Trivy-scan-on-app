
import React, { useState } from 'react';
import axios from 'axios';

const DepartmentForm = () => {
  const [nom, setNom] = useState('');
  const [numChef, setNumChef] = useState('');
  const [numAgendaDept, setNumAgendaDept] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/departments', { nom, numChef, numAgendaDept })
      .then(response => {
        setNom('');
        setNumChef('');
        setNumAgendaDept('');
        // Reload or update the deptl ist 
      })
      .catch(error => console.error('Error creating department:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Department Name"
        value={nom}
        onChange={e => setNom(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Chef ID"
        value={numChef}
        onChange={e => setNumChef(e.target.value)}
      />
      <input
        type="text"
        placeholder="Agenda Dept ID"
        value={numAgendaDept}
        onChange={e => setNumAgendaDept(e.target.value)}
        required
      />
      <button type="submit">Add Department</button>
    </form>
  );
};

export default DepartmentForm;
