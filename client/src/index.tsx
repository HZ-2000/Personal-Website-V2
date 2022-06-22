import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<Home />}/>
      <Route path='/projects' element={<Home />}/>
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);
