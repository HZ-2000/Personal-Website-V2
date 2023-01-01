import styles from './Home.module.css';
import { DiGithubBadge, DiReact } from 'react-icons/di';
import { TopNav } from '..';

export const Home: React.FC = () => {
    document.title = 'ZH | Home';
    
    return(
        <div className={styles.main}>
            <TopNav />
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
                            <p className={styles.gridItemTitle}>personal website</p>
                            <p>
                                My website has been rebuilt from the ground up with new code, a new look, and room for even more growth in the future. 
                                overall there is still a lot of areas to tinker with and improve such as the responsive aspect of the site and a few style details, 
                                however overall i am excited to present this new version!
                            </p>
                            <p>languages: <DiReact style={{verticalAlign: "middle"}}/>react</p>
                            <a href='https://github.com/HZ-2000/Personal-Website-V2'>
                                <DiGithubBadge className={styles.LinkWrapper} size="2em"/>
                            </a>
                        </div>
                        <div style={{"width": "4%"}}/>
                        <div className={styles.gridItem}>
                            <p className={styles.gridItemTitle}>pomodoro timer</p>
                            <p>
                                a web page with a journal style log and a pomodoro timer to help with productivity. 
                                the system works by sectioning your time into 25 minute chunks called pomodoros, 
                                at the end of 25 minutes of focused work you have completed 1 pomodoro and get a 5 minute break. 
                                complete 3 pomodoros and you get a 30 minute break.
                            </p>
                            <p>languages: <DiReact style={{verticalAlign: "middle"}}/>react</p>
                            <a href='https://github.com/HZ-2000/Pomodoro-Timer'>
                                <DiGithubBadge className={styles.LinkWrapper} size="2em"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
