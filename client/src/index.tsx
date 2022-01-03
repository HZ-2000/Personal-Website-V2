import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './views/Homepage';
import { Contact } from './views/Contact';
import { Projects } from './views/Projects';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);
