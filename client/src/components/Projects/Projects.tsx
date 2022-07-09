import { TopNav } from '..';
import { DiGithubBadge, DiReact } from 'react-icons/di';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
    document.title = 'ZH | Projects';

    return (
        <div className={styles.main}>
            <TopNav />
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.ProjectGrid}>
                <div className={styles.Project}>
                    <h1>Personal Website V2</h1>
                    <p>
                        This is the website you are currently visiting! It is a great test bed for me to learn 
                        new technologies or just have fun trying to make interesting designs. The current iteration 
                        is very basic however in the future I am planning on adding to it extensivley with games, 
                        weird tools, and fun side projects.
                    </p>
                    <p>Languages: <DiReact style={{verticalAlign: "middle"}}/>React</p>
                    <a href='https://github.com/HZ-2000/Machine-Learning-Demo' className={styles.LinkWrapper}><DiGithubBadge style={{verticalAlign: "middle"}}/>GitHub</a>
                </div>
                <div className={styles.Project}>
                    <h1>Personal Website V2</h1>
                    <p>
                        This is the website you are currently visiting! It is a great test bed for me to learn 
                        new technologies or just have fun trying to make interesting designs. The current iteration 
                        is very basic however in the future I am planning on adding to it extensivley with games, 
                        weird tools, and fun side projects.
                    </p>
                    <p>Languages: <DiReact style={{verticalAlign: "middle"}}/>React</p>
                    <a href='https://github.com/HZ-2000/Machine-Learning-Demo' className={styles.LinkWrapper}><DiGithubBadge style={{verticalAlign: "middle"}}/>GitHub</a>
                </div>
                <div className={styles.Project}>
                    <h1>Personal Website V2</h1>
                    <p>
                        This is the website you are currently visiting! It is a great test bed for me to learn 
                        new technologies or just have fun trying to make interesting designs. The current iteration 
                        is very basic however in the future I am planning on adding to it extensivley with games, 
                        weird tools, and fun side projects.
                    </p>
                    <p>Languages: <DiReact style={{verticalAlign: "middle"}}/>React</p>
                    <a href='https://github.com/HZ-2000/Machine-Learning-Demo' className={styles.LinkWrapper}><DiGithubBadge style={{verticalAlign: "middle"}}/>GitHub</a>
                </div>
                <div className={styles.Project}>
                    <h1>Personal Website V2</h1>
                    <p>
                        This is the website you are currently visiting! It is a great test bed for me to learn 
                        new technologies or just have fun trying to make interesting designs. The current iteration 
                        is very basic however in the future I am planning on adding to it extensivley with games, 
                        weird tools, and fun side projects.
                    </p>
                    <p>Languages: <DiReact style={{verticalAlign: "middle"}}/>React</p>
                    <a href='https://github.com/HZ-2000/Machine-Learning-Demo' className={styles.LinkWrapper}><DiGithubBadge style={{verticalAlign: "middle"}}/>GitHub</a>
                </div>
            </div>
        </div>
    )
}
