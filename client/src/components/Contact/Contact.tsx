import { TopNav } from '..';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
    return (
        <div className={styles.main}>
            <TopNav />
            <div className={styles.title}>
                <h1>Contact</h1>
            </div>
        </div>
    )
}
