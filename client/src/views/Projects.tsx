import React from 'react';
import { Nav } from '../components/Nav';
import styles from './css/Projects.module.css';

//images
import net from '../assets/img/pietro-jeng-n6B49lTx7NM-unsplash.jpg';
import tomatoe from '../assets/img/dennis-klein-FzB_512zvP0-unsplash.jpg';
import home from '../assets/img/maksim-istomin-N8VVveiNVbU-unsplash.jpg';
import tree from '../assets/img/dan-otis-OYFHT4X5isg-unsplash.jpg';

export const Projects: React.FC = () => {
    document.title = "ZH | Projects";
    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.title}>
                <h1>projects</h1>
            </div>

            <div className={styles.projectGrid}>
                <div className={styles.project}>
                    <div className={styles.text}>
                        <h2>ml demo</h2>
                        <p>a simple application built with python that allows the user to play with a neural network to understand what factors effect its results</p>
                        <div className={styles.link_wrapper}>
                            <a href='https://github.com/HZ-2000/Machine-Learning-Demo.git'>Link</a>
                        </div>
                    </div>
                    <img src={net} alt='net' />
                </div>

                <div className={styles.project}>
                    <div className={styles.text}>
                        <h2>fair home pro</h2>
                        <p>fairhomepro, a home care market place where users can find contractors for different home improvment tasks</p>
                        <div className={styles.link_wrapper}>
                            <a href='https://github.com/HZ-2000/FairHomePro.git'>Link</a>
                        </div>
                    </div>
                    <img src={home} alt='home' />
                </div>

                <div className={styles.project}>
                    <div className={styles.text}>
                        <h2>personal website V2</h2>
                        <p> this is the website you are currently viewing! the second version added a new react frontend with typescript </p>
                        <div className={styles.link_wrapper}>
                            <a href='https://github.com/HZ-2000/Personal-Website-V2.git'>Link</a>
                        </div>
                    </div>
                    <img src={tree} alt='tree' />
                </div>

                <div className={styles.project}>
                    <div className={styles.text}>
                        <h2>pomodoro timer</h2>
                        <p> a pomodoro timer that has a task list attached, so that you may log tasks and use the timer above to manage your time </p>
                        <div className={styles.link_wrapper}>
                            <a href='https://github.com/HZ-2000/Pomodoro-Timer'>Link</a>
                        </div>
                    </div>
                    <img src={tomatoe} alt='tomatoe' />
                </div>
            </div>
        </div>
    )
}
