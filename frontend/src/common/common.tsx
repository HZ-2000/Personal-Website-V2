import tree from '../assets/img/matthew-smith-rFBA42UFpLs-unsplash.jpg'
import pong_paddle from '../assets/img/nicholas-ismael-martinez-LsmKRNXnyyA-unsplash.jpg'
import house from '../assets/img/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg'
import wing from '../assets/img/fransiskus-filbert-mangundap-LnrNbu-DeIc-unsplash.jpg'


export const personal_website = {
    name: "Personal Website",
    description: "The very site you are visiting! This is a place where i learn and test new things like React18, MUI, and hopefully github actions at some point.",
    image: tree,
    link: "https://github.com/HZ-2000/Personal-Website-V2"
}

export const prandtld_system = {
    name: "Prandtl-D System",
    description: "As part of a project with NASA to develop a prandtl wing UAV, This system was meant to help bridge the gap between the team and NASA. It displays data on our test flights, team milestones, and any relevant files which can also be downloaded.",
    image: wing,
    link: "https://github.com/HZ-2000"
}

export const fair_home_pro = {
    name: "Fair Home Pro",
    description: "A Home imporvment site that connects users to different contactors for bids on home improvment projects.",
    image: house,
    link: "https://github.com/HZ-2000/FairHomePro"
}

export const pong = {
    name: "Pong",
    description: "A remake of a classic game as a gateway into Unity. This project was also used in a presentation given in a class called Software Engineering, to introduce Unity's testing system.",
    image: pong_paddle,
    link: "https://github.com/HZ-2000/Pong" 
}

export const projects = [
    personal_website,
    prandtld_system,
    fair_home_pro,
    pong
]