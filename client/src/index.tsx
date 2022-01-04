import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './views/Homepage';
import { Contact } from './views/Contact';
import { Projects } from './views/Projects';
import { CGOL } from './views/cgol';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/cgol' element={<CGOL />} />
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);
