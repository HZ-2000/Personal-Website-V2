import { Home1, HomeAbout } from '../components';

export const Homepage: React.FC = () => {
    document.title = "ZH | Home";

    return(
        <div>
            <Home1/>
            <HomeAbout/>
        </div>  
    )
}
