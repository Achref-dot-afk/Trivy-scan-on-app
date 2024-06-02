
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlertForm from './AlertForm';

const AlertList = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get('/api/alerts')
      .then(response => setAlerts(response.data))
      .catch(error => console.error('Error fetching alerts:', error));
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <AlertForm />
      <ul>
        {alerts.map(alert => (
          <li key={`${alert.type}-${alert.numActivité}`}>
            {alert.type} - {alert.delais}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList;
