import './css/Nav.css';
import '../views/css/vars.css';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
    return(
        <nav>
            <div className='Left-Side'>
                <h1>zach heimbigner</h1>
            </div>

            <div className='Right-Side'>
                <ul>
                    <Link className='link-wrapper' to='/'>home</Link>
                </ul>
                <ul>
                    <Link className='link-wrapper' to='/contact'>contact</Link>
                </ul>
                <ul>
                    <Link className='link-wrapper' to='/projects'>projects</Link>
                </ul>
                <ul>
                    <Link className='link-wrapper' to='/cgol'>cgol</Link>
                </ul>
            </div>
        </nav>

    )
}
