import styles from './TopNav.module.css';
import { Link } from 'react-router-dom';

export const TopNav: React.FC = () => {
    return(
        <nav className={styles.main}>
            <ul className={styles.HorizontalNav}>
                <li>
                    <Link className={styles.LinkWrapper} to='/'>_Home</Link>
                </li>
                <li>
                    <Link className={styles.LinkWrapper} to='/contact'>_Contact</Link>
                </li>
                <li>
                    <Link className={styles.LinkWrapper} to='/projects'>_Projects</Link>
                </li>
            </ul>
        </nav>
    )
}
