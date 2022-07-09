import styles from './TopNav.module.css';
import { Link } from 'react-router-dom';

export const TopNav: React.FC = () => {
    return(
        <nav className={styles.main}>
            <ul className={styles.HorizontalNav}>
                <li>
                    <Link className={styles.LinkWrapper} to='/'>Home</Link>
                </li>
                <li>
                    <Link className={styles.LinkWrapper} to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link className={styles.LinkWrapper} to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
