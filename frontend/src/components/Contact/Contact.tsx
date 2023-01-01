import { TopNav } from '..';
import styles from './Contact.module.css';
import resume from '../../assets/img/resume.png';

export const Contact: React.FC = () => {
    document.title = 'ZH | Contact';

    return (
        <div className={styles.main}>
            <TopNav />
            <div>
                <h1 className={styles.title}>contact</h1>
                <div className={styles.InfoSection}>
                    <h1>info</h1>
                    <p>phone: 1.509.822.9076</p>
                    <p>email: zach@zachheimbigner.io</p>
                </div>
                <div className={styles.ResumeSection}>
                    <h1>resume:</h1>
                    <div>
                        <a className={styles.LinkWrapper} href={require('../../assets/doc/Resume.pdf')}>link</a> 
                    </div>
                    <img src={resume} alt='resume'/>
                </div>
            </div>
        </div>
    )
}
