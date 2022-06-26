import { TopNav } from '..';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
    document.title = 'ZH | Contact';

    return (
        <div className={styles.main}>
            <TopNav />
            <div>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.InfoSection}>
                    <h1>Info</h1>
                    <p>Phone: 1.509.822.9076</p>
                    <p>Email: zach@zachheimbigner.io</p>
                </div>
                <div className={styles.ResumeSection}>
                    <h1>Resume:</h1>
                    <a className={styles.LinkWrapper} href=''>link</a>
                </div>
            </div>
        </div>
    )
}
