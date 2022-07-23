import { TopNav } from '..';
import { DiGithubBadge, DiReact, DiPython, DiMongodb, DiNodejsSmall, DiUnitySmall } from 'react-icons/di';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
    document.title = 'ZH | Projects';

    return (
        <div className={styles.main}>
            <TopNav />
            <h1 className={styles.title}>projects</h1>
            <div className={styles.ProjectGrid}>
                <div className={styles.Project}>
                    <h1>personal Website v2</h1>
                    <p>
                        this is the website you are currently visiting! it is a great test bed for me to learn 
                        new technologies or just have fun trying to make interesting designs. the current iteration 
                        is very basic however in the future i am planning on adding to it extensivley with games, 
                        weird tools, and fun side projects.
                    </p>
                    <p>languages: <DiReact style={{verticalAlign: "middle"}}/>react</p>
                    <a href='https://github.com/HZ-2000/Machine-Learning-Demo'>
                        <DiGithubBadge className={styles.LinkWrapper} size="3em"/>
                    </a>
                </div>
                <div className={styles.Project}>
                    <h1>fair home pro</h1>
                    <p>
                        
                    </p>
                    <p>languages: <DiNodejsSmall style={{verticalAlign: "middle"}}/>nodejs, ejs, <DiMongodb style={{verticalAlign: "middle"}}/>mongodb</p>
                    <a href='https://github.com/HZ-2000/Machine-Learning-Demo'>
                        <DiGithubBadge className={styles.LinkWrapper} size="3em"/>
                    </a>
                </div>
                <div className={styles.Project}>
                    <h1>pong</h1>
                    <p>
                    </p>
                    <p>languages: <DiUnitySmall style={{verticalAlign: "middle"}}/>untiy, c#</p>
                    <a href='https://github.com/HZ-2000/Machine-Learning-Demo'>
                        <DiGithubBadge className={styles.LinkWrapper} size="3em"/>
                    </a>
                </div>
                <div className={styles.Project}>
                    <h1>machine learning demo</h1>
                    <p>
                    </p>
                    <p>languages: <DiPython style={{verticalAlign: "middle"}}/>python</p>
                    <a href='https://github.com/HZ-2000/Machine-Learning-Demo'>
                        <DiGithubBadge className={styles.LinkWrapper} size="3em"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
