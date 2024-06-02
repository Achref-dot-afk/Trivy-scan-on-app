
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditAct from './pages/EditAct';
import DeleteAct from './pages/DelAct';
import CreateAct from './pages/CreateAct';
const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path='/'  element={<Home></Home>} />
        <Route path='/activites/edit/:numActivite'  element={<EditAct></EditAct>} />
        <Route path='/activites/createAct/'  element={<CreateAct/>} />
        <Route path='/activites/delete/:numActivite'  element={<DeleteAct></DeleteAct>} />
 
      </Routes>
    </div>
  </Router>
);

export default App;
