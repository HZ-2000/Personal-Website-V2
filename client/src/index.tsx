import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage, Contact, Projects } from './components';
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
