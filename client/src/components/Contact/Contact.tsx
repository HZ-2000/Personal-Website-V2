import { TopNav } from '..';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
    return (
        <div className={styles.main}>
            <TopNav />
            <h1>Contact</h1>
        </div>
    )
}
