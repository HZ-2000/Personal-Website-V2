import styles from './Home.module.css';
import { DiGithubBadge, DiReact, DiPython } from 'react-icons/di';
import { TopNav, SideNav } from '..';

export const Home: React.FC = () => {
    document.title = 'ZH | Home';
    
    return(
        <div className={styles.main}>
            <TopNav />
            <SideNav />
            <section id="home">
                <div className={styles.intro}>
                    <p className={styles.introMainText}>cogito, ergo sum</p>
                    <p>i think, therfore i am</p>
                </div>
            </section>
            <section id="projects">
                <div>
                    <p className={styles.title}>about</p>
                    <div className={styles.projBox}>
                        <div className={styles.gridItem}>
                            <div className={styles.portrait}/>
                        </div>
                        <div style={{"width": "4%"}}/>
                        <div className={styles.gridItem}>
                            <p className={styles.gridItemTitle}>welcome, im zach!</p>
                            <p>
                                i am currently a intern at sel and enjoy the challenges of learning new technologies and ideas,
                                 whilst simultaneously getting to use them in the development process! outside of work i enjoy cycling
                                 in most of its forms, art of the modern era, and making multiple iterations of odd side projects like 
                                 this website!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div>
                    <p className={styles.title}>featured projects</p>
                    <div className={styles.projBox}>
                        <div className={styles.gridItem}>
                            <p className={styles.gridItemTitle}>personal website v2</p>
                            <p>
                                this is the website you are currently visiting! it is a great place to learn 
                                new technologies or just have fun trying to make interesting designs. the current iteration 
                                is very basic however in the future i am planning on adding to it.
                            </p>
                            <p>languages: <DiReact style={{verticalAlign: "middle"}}/>react</p>
                            <a href='https://github.com/HZ-2000/Machine-Learning-Demo'>
                                <DiGithubBadge className={styles.LinkWrapper} size="2em"/>
                            </a>
                        </div>
                        <div style={{"width": "4%"}}/>
                        <div className={styles.gridItem}>
                            <p className={styles.gridItemTitle}>machine learning demo</p>
                            <p>this is a brief description of the project and will be displayed above the link to my github where the project is!</p>
                            <p>languages: <DiPython style={{verticalAlign: "middle"}}/>python</p>
                            <a href='https://github.com/HZ-2000/Machine-Learning-Demo'>
                                <DiGithubBadge className={styles.LinkWrapper} size="2em"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
