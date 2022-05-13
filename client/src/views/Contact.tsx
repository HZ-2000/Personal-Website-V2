import { Nav } from '../components/Nav';
import './css/Contact.css';
import './css/vars.css';
import resume from '../assets/img/Resume.png';

export const Contact: React.FC = () => {
    document.title = "ZH | Contact";
    return (
        <div className='main'>
            <Nav />
            <div className='info-grid'>
                <div className='information'>
                    <div className='title'>
                        <h1>contact</h1>
                    </div>
                    <h2>email: zach@zachheimbigner.io</h2>
                    <h2>phone: 1.509.822.9076</h2>
                </div>

                <div className='image'>
                    <div className='title'>
                        <h1>resume</h1>
                    </div>

                    <img className='image' src={resume} alt="Resume" />
                </div>
            </div>
        </div>
    )
}
