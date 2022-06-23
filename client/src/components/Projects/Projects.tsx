import { TopNav } from '..';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
    return (
        <div className={styles.main}>
            <TopNav />
            <h1>Projects</h1>
        </div>
    )
}
