import './Nav.css';
import { Link } from 'react-scroll';

export const Nav: React.FC = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link activeClass='active' smooth spy to='home'>-&nbsp;01</Link>
                </li>
                <li>
                    -
                </li>
                <li>
                    <Link activeClass='active' smooth spy to='projects'>-&nbsp;02</Link>
                </li>
                <li>
                    -
                </li>
                <li>
                    <Link activeClass='active' smooth spy to='contact'>-&nbsp;03</Link>
                </li>
            </ul>
        </nav>

    )
}
