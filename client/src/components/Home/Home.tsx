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
                    <p className={styles.introMainText}>"Cogito, ergo sum"</p>
                    <p>- I think, therfore I am</p>
                </div>
            </section>
            <section id="projects">
                <div>
                    <p className={styles.title}>About</p>
                    <div className={styles.projBox}>
                        <div className={styles.gridItem}>
                            <div className={styles.portrait}/>
                        </div>
                        <div style={{"width": "4%"}}/>
                        <div className={styles.gridItem}>
                            <p className={styles.gridItemTitle}>Welcome, Im Zach!</p>
                            <p>
                                I am currently a intern at SEL and enjoy the challenges of learning new technologies and ideas,
                                 whilst simultaneously getting to use them in the development process! outside of work I enjoy cycling
                                 in most of its forms, art of the modern era, and making multiple iterations of odd side projects like 
                                 this website!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div>
                    <p className={styles.title}>Featured Projects</p>
                    <div className={styles.projBox}>
                        <div className={styles.gridItem}>
                            <p className={styles.gridItemTitle}>Personal Website V2</p>
                            <p>
                                This is the website you are currently visiting! It is a great test bed for me to learn 
                                new technologies or just have fun trying to make interesting designs. The current iteration 
                                is very basic however in the future I am planning on adding to it extensivley with games, 
                                weird tools, and fun side projects.
                            </p>
                            <p>Languages: <DiReact style={{verticalAlign: "middle"}}/>React</p>
                            <a href='https://github.com/HZ-2000/Machine-Learning-Demo' className={styles.LinkWrapper}><DiGithubBadge style={{verticalAlign: "middle"}}/>GitHub</a>
                        </div>
                        <div style={{"width": "4%"}}/>
                        <div className={styles.gridItem}>
                            <p className={styles.gridItemTitle}>Machine Learning Demo</p>
                            <p>this is a brief description of the project and will be displayed above the link to my github where the project is!</p>
                            <p>Languages: <DiPython style={{verticalAlign: "middle"}}/>Python</p>
                            <a href='https://github.com/HZ-2000/Machine-Learning-Demo' className={styles.LinkWrapper}><DiGithubBadge  style={{verticalAlign: "middle"}}/>GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
