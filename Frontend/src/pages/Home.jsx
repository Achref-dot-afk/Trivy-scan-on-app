import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FcViewDetails } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import AddAct from '../components/AddAct';

const Home = () => {
  const [acts, setActs] = useState([]);

  useEffect(() => {
    try {
      axios.get('http://localhost:3002/activites')
        .then(res => setActs(res.data));
    } catch (error) {
      console.error('Error fetching activity:', error.message);
    }
  }, []);

  const columns = [
    {
      field: 'numActivite',
      headerName: 'Numéro Activite',
      flex: 1,
      valueGetter: (params) => params.row.numActivite || params.row.numActDept,
    },
    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
      valueGetter: (params) => params.row.typeA || params.row.typeD,
    },
    {
      field: 'dateAct',
      headerName: 'Date',
      flex: 1,
    },
    {
      field: 'createur',
      headerName: 'Createur',
      flex: 1,
    },
    {
      field: 'visible',
      headerName: 'Visible',
      flex: 1,
    },
    {
      field: 'options',
      headerName: 'Options',
      flex: 1,
      renderCell: (params) => (
        <div className='flex justify-center gap-x-4'>
          <Link to={`/activites/edit/${params.row.numActivite}`}>
          <a className='text-blue-600'>Modifier</a>
          </Link>
          <Link to={`/activites/delete/${params.row.numActivite}`}>
          <a className='text-red-600'>Supprimer</a>
          </Link>
        </div>
      ),
    },
  ];

  const rows = acts.map((act, index) => ({ id: index, ...act }));

  return (
    <div>
      <div className='flex justify-between px-4 flex flex-col'>
        <span className='font-bold text-4xl my-3 text-teal-600 translate-x-1/2 w-full'>Agenda</span>
        <a className='border bg-red-400 p-4 w-60 text-center cursor-pointer text-white rounded' href='/activites/createAct'>Ajouter une activité</a>
      </div>
      <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Home;
