import styles from './Home.module.css';
import { TopNav, SideNav, Contact } from '..';

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
                </div>
            </section>
            <section id="contact">
                <div className={styles.title}>
                    <h1>Upcoming Projects</h1>
                </div>
            </section>
        </div>
    )
}
