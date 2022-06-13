import styles from './Home.module.css';
import { Nav } from '../Nav/Nav';

export const Homepage: React.FC = () => {
    return (
        <div className={styles.main}>
            <Nav />
            <div className={styles.title}>
                <h1>Hello, World!</h1>
                <h2>welcome to my website! i have built this as a portfolio to showcase my current projects as well as a grounds for learning and sharing new ideas </h2>
                <h2>i hope you enjoy!</h2>
                <h1>V</h1>
            </div>
        </div>
    )
}
