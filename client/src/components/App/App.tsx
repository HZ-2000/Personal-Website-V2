import { Nav, Contact, Projects, Home } from '..';
import './App.css';

export const App: React.FC = () => {
    document.title = "ZH | Home";

    return(
        <div>
            <Nav />
            <section id="home"><Home /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </div>
    )
}
