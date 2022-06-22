import styles from './SideNav.module.css';
import { Link } from 'react-scroll';

export const SideNav: React.FC = () => {
    return(
        <nav>
            <ul className={styles.VerticalNav}>
                <li>
                    <Link activeClass={styles.active} smooth spy to='home'>-&nbsp;01</Link>
                </li>
                <li>
                    -
                </li>
                <li>
                    <Link activeClass={styles.active} smooth spy to='projects'>-&nbsp;02</Link>
                </li>
                <li>
                    -
                </li>
                <li>
                    <Link activeClass={styles.active} smooth spy to='contact'>-&nbsp;03</Link>
                </li>
            </ul>
        </nav>

    )
}
