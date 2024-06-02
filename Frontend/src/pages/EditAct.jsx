import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { SnackbarProvider, useSnackbar } from 'notistack';

function EditAct() {
  const { numActivite } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  const [type, setType] = useState('');
  const [createur, setCreateur] = useState('');
  const [visible, setVisible] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3002/activites/${numActivite}`)
      .then(response => {
        const { typeA, createur, visible } = response.data;
        setType(typeA);
        setCreateur(createur);
        setVisible(visible);
      })
      .catch(err => {
        enqueueSnackbar('Error fetching activity data', { variant: 'error' });
      });
  }, [numActivite, enqueueSnackbar]);

  const handleEditAct = () => {
    const data = {
      typeA: type,
      createur: createur,
      visible: visible,
    };

    axios.put(`http://localhost:3002/activites/${numActivite}`, data)
      .then(response => {
        enqueueSnackbar('Activity edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch(() => {
        enqueueSnackbar('Invalid changes', { variant: 'error' });
      });
  };

  return (
    <SnackbarProvider>
      <BackButton />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col w-full max-w-lg bg-white p-8 shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Edit Activity</h1>
          
          <label htmlFor="type" className="mb-2">Type</label>
          <input
            type="text"
            id="type"
            className="border rounded mb-4 p-2 w-full"
            value={type}
            onChange={e => setType(e.target.value)}
          />

          <label htmlFor="createur" className="mb-2">Createur</label>
          <input
            type="text"
            id="createur"
            className="border rounded mb-4 p-2 w-full"
            value={createur}
            onChange={e => setCreateur(e.target.value)}
          />

          <label htmlFor="visible" className="mb-2">Visible</label>
          <input
            type="text"
            id="visible"
            className="border rounded mb-4 p-2 w-full"
            value={visible}
            onChange={e => setVisible(e.target.value)}
          />

          <button
            className="bg-blue-500 text-white p-2 rounded w-full"
            onClick={handleEditAct}
          >
            Save
          </button>
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default EditAct;
