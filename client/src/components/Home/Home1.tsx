import styles from '../css/Home1.module.css';
import { Nav } from '../';
import '../../views/css/vars.css';
import main_drop from '../../assets/img/kace-rodriguez-p3OzJuT_Dks-unsplash.jpg';

export const Home1: React.FC = () => {
    document.title = "ZH | Home";

    return(
        <div className={styles.main}>
            <img className={styles.image} src={main_drop} alt="ocean"/>
            <Nav/>
            <div className={styles.title}>
                <h1>Hello, World!</h1>
            </div>
        </div>  
    )
}

export default Home1;