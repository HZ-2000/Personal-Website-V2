import { TopNav } from '..';
import styles from './Contact.module.css';
import resume from '../../assets/Screenshot from 2021-10-19 22-04-03.png';

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
                    <div>
                        <a className={styles.LinkWrapper} href=''>link</a> 
                    </div>
                    <img src={resume} alt='resume'/>
                </div>
            </div>
        </div>
    )
}
