import { Nav } from '../components/Nav';
import Particles from "react-tsparticles";
import styles from './css/Home.module.css';

export const Homepage: React.FC = () => {
    document.title = "ZH | Home";

    const particlesInit = (main: any) => {
        console.log(main);
    };
    
    const particlesLoaded = (container: any) => {
        console.log(container);
    };

    return(
        
        <div className={styles.main}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                    modes: {
                        bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        },
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 200,
                        duration: 0.4,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 1,
                    },
                    },
                    detectRetina: true,
                }}
            />
            <Nav />
            <div className={styles.title}>
                <h1>Hello, World!</h1>
                <h2>welcome to my website! i have built this as a portfolio to showcase my current projects as well as a grounds for learning and sharing new ideas </h2>
                <h2>i hope you enjoy!</h2>
            </div>
        </div>  
    )
}
