import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './views/Homepage';
import { Contact } from './views/Contact';
import { CGOL } from './views/cgol';
import './index.css';
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cgol' element={<CGOL />} />
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);
