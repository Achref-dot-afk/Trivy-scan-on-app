
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentForm from './DepartmentForm';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get('/api/departments')
      .then(response => setDepartments(response.data))
      .catch(error => console.error('Error fetching departments:', error));
  }, []);

  return (
    <div>
      <h2>Departments</h2>
      <DepartmentForm />
      <ul>
        {departments.map(dept => (
          <li key={dept.num}>{dept.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
