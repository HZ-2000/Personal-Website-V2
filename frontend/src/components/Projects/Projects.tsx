import React from 'react';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
    document.title = 'ZH | Projects';

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>projects</h1>
            <div className={styles.ProjectGrid}>
                <div className={styles.Project}>
                    <h1>personal Website</h1>
                    <p>
                        this is the website you are currently visiting! it is a great test bed for me to learn 
                        new technologies or just have fun trying to make interesting designs. the current iteration 
                        is very basic however in the future i am planning on adding to it extensivley with games, 
                        weird tools, and fun side projects.
                    </p>
                    <p>languages:react</p>
                    <a href='https://github.com/HZ-2000/Personal-Website-V2'>
                    </a>
                </div>
                <div className={styles.Project}>
                    <h1>pomodoro</h1>
                    <p>
                        a web page with a journal style log and a pomodoro timer to help with productivity. 
                        the system works by sectioning your time into 25 minute chunks called pomodoros, 
                        at the end of 25 minutes of focused work you have completed 1 pomodoro and get a 5 minute break. 
                        complete 3 pomodoros and you get a 30 minute break.
                    </p>
                    <p>languages:react</p>
                    <a href='https://github.com/HZ-2000/Pomodoro-Timer'>
                    </a>
                </div>
                <div className={styles.Project}>
                    <h1>fair home pro</h1>
                    <p>
                        a Home care market place where users can find contractors for different home improvement and maintenance tasks. 
                        this was a project for database systems and my first dive into web development. 
                    </p>
                    <p>languages:nodejs, ejs,mongodb</p>
                    <a href='https://github.com/HZ-2000/FairHomePro'>
                    </a>
                </div>
                <div className={styles.Project}>
                    <h1>pong</h1>
                    <p>
                        my first real project in unity, also the first assignment for software engineering. later me and my group used it 
                        to learn unity's testing system and create some intresting tests.
                    </p>
                    <p>languages:untiy, c#</p>
                    <a href='https://github.com/HZ-2000/Pong'>
                    </a>
                </div>
            </div>
        </div>
    )
}
