import React from 'react';
import { Nav } from '../components/Nav';
import styles from './css/Contact.module.css';
import resume from '../assets/img/Resume.png';

export const Contact: React.FC = () => {
    document.title = "ZH | Contact";
    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.title}>
                <h1>contact</h1>
            </div>

            <div className={styles.information}>
                <h2>email: zach@zachheimbigner.io</h2>
                <h2>phone: 1.509.822.9076</h2>
            </div>

            <div className={styles.title}>
                <h1>resume</h1>
            </div>

            <img className={styles.image} src={resume} alt="Resume" />

        </div>
    )
}
