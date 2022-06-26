import { TopNav } from '..';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
    document.title = 'ZH | Projects';

    return (
        <div className={styles.main}>
            <TopNav />
            <div className={styles.title}>
                <h1>Projects</h1>
            </div>
        </div>
    )
}
