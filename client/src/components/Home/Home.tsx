import styles from './Home.module.css';
import { TopNav, SideNav, Contact, Projects } from '..';

export const Home: React.FC = () => {
    return(
        <div>
            <TopNav />
            <SideNav />
            <section id="home">
                <div className={styles.main}>
                    <h1>This is a test page lol</h1>
                    <h2>Welcome!</h2>
                </div>
            </section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
        </div>
    )
}
