import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';

function ActForm() {
  let v = 2;
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [typeA, setTypeA] = useState('');
  const [numActivite, setNumActivite] = useState('');
  const [visible, setVisible] = useState('');
  const [description, setDescript] = useState('');
  const [dateAct, setDateAct] = useState('');
  const [hDebut, setHDebut] = useState('');
  const [hFin, setHFin] = useState('');
  const [dateCreation, setDateCreation] = useState('');
  const [createur, setCreateur] = useState('');
  const [resum, setResum] = useState('');
  const [agendaOptions, setAgendaOptions] = useState([]);
  const [numAgenda, setNumAgenda] = useState('');
  const [numProcesV, setNumProcesV] = useState(0);
  const [condition, setCondition] = useState(false);
  const [alert, setAlert] = useState(false);
  const [blk, setBlk] = useState(false);
  const [etat, setEtat] = useState(false);

  const getNumActivite = () => {
    axios.get('http://localhost:3002/activites/HighId')
      .then((res) => {
        v++;
        setNumActivite(res.data.maxNumActivite + v);
      })
      .catch(() => setNumActivite(1));
  };
  useEffect(() => {
    getNumActivite();
  }, []);
  
  const data = {
    [visible === "professionnelle" ? "typeD" : "typeA"]: typeA,
    numActivite,
    description,
    dateAct,
    hDebut,
    hFin,
    dateCreation,
    createur,
    visible,
    numAgenda,
    numProcesV,
  };
  
  const pv = {
    numProcesV,
    resum,
  };

  useEffect(() => {
    axios.get('http://localhost:3002/Pv/PvHnum')
      .then((res) => setNumProcesV(res.data.maxNumProcesV + 1))
      .catch(() => setNumProcesV(1));
  }, []);

  const AddPv = () => {
    setBlk(true);
  };

  const saveActdept = () => {
    axios.post("http://localhost:3002/activites/createActdept", data)
      .then(() => {
        enqueueSnackbar('Departemental Activity Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch(() => {
        enqueueSnackbar('All fields are required', { variant: 'error' });
      });
  };

  const saveAct = () => {
    axios.post("http://localhost:3002/activites/createAct", data)
      .then(() => {
        enqueueSnackbar('Activity Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch(() => {
        enqueueSnackbar('All fields are required', { variant: 'error' });
      });
  };

  const handleSaveAct = () => {
    if (typeA === "professionnelle") {
      saveActdept();
    } else {
      saveAct();
      console.log(data);
    }
  };

  useEffect(() => {
    const typeCondition = () => {
      if (typeA !== "réunion" && typeA !== "mini projet" && typeA !== "séminaire" && typeA !== "cours") {
        setCondition(true);
      } else {
        setCondition(false);
      }
    };
    typeCondition();
  }, [typeA]);

  useEffect(() => {
    axios.get('http://localhost:3002/agendas/agendaNumbers')
      .then(response => {
        setAgendaOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching agenda options:', error);
      });
  }, []);

  const handleSubmit = () => {
    if (resum !== "") setBlk(false);
    axios.post('http://localhost:3002/Pv/createPv', pv);
    if (visible === "professionnelle") {
      setEtat(true);
    }
  };

  const alertcreate = () => {
    setAlert(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-lg bg-white p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Activity</h1>
        <label htmlFor="visibility" className="mb-2">Visibility of Activity</label>
        <select
          name="visibility"
          className="border rounded mb-4 p-2"
          onChange={e => setVisible(e.target.value)}
        >
          <option value="">Select visibility</option>
          <option value="professionnelle">Professionnelle</option>
          <option value="non visible">Non Visible</option>
          <option value="personnelle">Personnelle</option>
        </select>

        {(visible === "professionnelle" || visible === "non visible" || visible === "personnelle") && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="TypeA or D"
              className="border rounded outline-none mb-4 p-2 w-full"
              onChange={e => setTypeA(e.target.value)}
            />
            {condition && <p className="text-red-500 mb-4">Invalid type</p>}
            <textarea
              placeholder="Detailed Description"
              className="border rounded outline-none mb-4 p-2 w-full"
              onChange={e => setDescript(e.target.value)}
            />
            <input
              type="date"
              placeholder="Activity Date"
              className="border rounded outline-none mb-4 p-2 w-full"
              onChange={e => setDateAct(e.target.value)}
            />
            <input
              type="time"
              placeholder="Start Time"
              className="border rounded outline-none mb-4 p-2 w-full"
              onChange={e => setHDebut(e.target.value)}
            />
            <input
              type="time"
              placeholder="End Time"
              className="border rounded outline-none mb-4 p-2 w-full"
              onChange={e => setHFin(e.target.value)}
            />
            <input
              type="date"
              placeholder="Creation Date"
              className="border rounded outline-none mb-4 p-2 w-full"
              onChange={e => setDateCreation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Creator"
              className="border rounded outline-none mb-4 p-2 w-full"
              onChange={e => setCreateur(e.target.value)}
            />
            <select
              value={numAgenda}
              onChange={e => setNumAgenda(e.target.value)}
              className="border rounded outline-none mb-4 p-2 w-full"
            >
              <option value="">Select Agenda Number</option>
              {agendaOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

            {blk && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-xl mb-4">Add Proces Verbal</h2>
                  <label htmlFor="resum" className="block mb-1">Summary:</label>
                  <input
                    type="text"
                    id="resum"
                    placeholder="Summary..."
                    className="border rounded outline-none p-2 mb-4 w-full"
                    onChange={e => setResum(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

            {alert && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-xl mb-4">Create Alert</h2>
                  <label htmlFor="type" className="block mb-1">Type:</label>
                  <input
                    type="text"
                    id="type"
                    placeholder="Type..."
                    className="border rounded outline-none p-2 mb-4 w-full"
                    onChange={e => setResum(e.target.value)}
                  />
                  <label htmlFor="delay" className="block mb-1">Delay:</label>
                  <input
                    type="text"
                    id="delay"
                    placeholder="Delay..."
                    className="border rounded outline-none p-2 mb-4 w-full"
                    onChange={e => setResum(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

            {visible === "professionnelle" && (
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded"
                onClick={AddPv}
              >
                Create Proces Verbal
              </button>
            )}
            {visible === "personnelle" && (
              <button
                className="mt-4 bg-blue-500 text-white p-2 rounded"
                onClick={alertcreate}
              >
                Create Alert for this Activity
              </button>
            )}
          </div>
        )}

        {!condition && (
          <button
            onClick={handleSaveAct}
            className="mt-4 bg-teal-500 text-white p-2 rounded w-full"
          >
            Save Activity
          </button>
        )}
      </div>
    </div>
  );
}

export default ActForm;
