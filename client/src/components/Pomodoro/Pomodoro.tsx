import { TopNav } from '..';
import {Timer, Journal} from '../';
import styles from './Pomodoro.module.css';

export const Pomodoro: React.FC = () => {
    document.title = 'ZH | Pomodoro';

    return (
        <div className={styles.main}>
            <TopNav />
            <div>
                <h1 className={styles.title}>pomodoro</h1>
                <Timer />
                <Journal />
            </div>
        </div>
    )
}
