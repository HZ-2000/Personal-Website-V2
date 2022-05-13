import styles from '../css/HomeAbout.module.css';
import '../../views/css/vars.css';
import tree from '../../assets/img/andras-vas-Bd7gNnWJBkU-unsplash.jpg'

export const HomeAbout: React.FC = () => {
    document.title = "ZH | Home";

    return(
        <div className={styles.main}>
            <div className={styles.portrait}>
                <img src={tree} alt='tree'/>
            </div>

            <div className={styles.description}>
                <h1>welcome to my website! i have built this as a portfolio to showcase my current projects as well as a grounds for learning and sharing new ideas. i hope you enjoy!</h1>
            </div>
        </div>  
    )
}

export default HomeAbout;