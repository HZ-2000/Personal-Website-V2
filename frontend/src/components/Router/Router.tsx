import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import { Home, Projects, Contact, Pomodoro } from '../';

export const Router: React.FC = () => {
    return(
        <Switch>
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/pomodoro' element={<Pomodoro />}/>
            </Routes>
        </Switch>
    )
}
