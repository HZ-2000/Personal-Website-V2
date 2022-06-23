import styles from './Home.module.css';
import { TopNav, SideNav } from '..';

export const Home: React.FC = () => {
    return(
        <div className={styles.main}>
            <TopNav />
            <SideNav />
            <section id="home">
                <div className={styles.welcome}>
                    <h1>This is a test page lol</h1>
                    <h2>Welcome!</h2>
                </div>
            </section>
            <section id="projects">
                <div className={styles.title}>
                    <h1>Featured Projects</h1>
                    <div className={styles.projBox}>
                        <div className={styles.gridItem}>
                            <h1>bloom</h1>
                        </div>
                        <div style={{"width": "4%"}}/>
                        <div className={styles.gridItem}>
                            <h1>tacos</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className={styles.title}>
                    <h1>Upcoming Projects</h1>
                    <div className={styles.projBox}>
                        <div className={styles.gridItem}>
                            <h1>nachos</h1>
                        </div>
                        <div style={{"width": "4%"}}/>
                        <div className={styles.gridItem}>
                            <h1>steak</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
