import styles from './TopNav.module.css';
import { Link } from 'react-router-dom';

export const TopNav: React.FC = () => {
    return(
        <nav className={styles.main}>
            <ul className={styles.HorizontalNav}>
                <li>
                    <Link className={styles.LinkWrapper} to='/'>home</Link>
                </li>
                <li>
                    <Link className={styles.LinkWrapper} to='/projects'>projects</Link>
                </li>
                <li>
                    <Link className={styles.LinkWrapper} to='/pomodoro'>pomodoro</Link>
                </li>
                <li>
                    <Link className={styles.LinkWrapper} to='/contact'>contact</Link>
                </li>
            </ul>
        </nav>
    )
}
