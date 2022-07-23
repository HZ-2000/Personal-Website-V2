import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Projects, Contact, Pomodoro } from './components';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/pomodoro' element={<Pomodoro />}/>
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);
