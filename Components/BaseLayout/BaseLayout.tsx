import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../Navbar";
import HeroImage from "../HeroImage";
import { ChatBot } from "../ChatBot/ChatBot";
import Footer from "../Footer";
import { NavLink } from "../Footer/Footer.styles";
import { Section } from "../Section/Section";
import data from "../../content.json"

const BaseLayout = ({ children }: any) => {
    const [ background, setBackground ] = useState('');
    const [ NotFound, setNotFound ] = useState(false)
    const [ headline, setHeadline ] =useState('')
    const router = useRouter()
    const currentRoute = router.pathname
    useEffect(()=> {
        settingBackground(currentRoute)
    }, [currentRoute])

    const settingBackground = (currentRoute:string) => {
        setNotFound(false)
        setHeadline('')
        let image
        switch(currentRoute) {
            case "/":
                image = require('../Images/background/ikigaiBackground.webp')
            break;
            case "/about":
                image = require('../Images/background/plantBackground.jpg')
                setHeadline(data.bio.header)
            break;
            case "/testimonial":
                image = require('../Images/background/sparkleBackground.jpg')
            break;
            case "/contact":
                image = require('../Images/background/pyrimidBackground.jpg')
                setHeadline(data.contact.header)
            break;
            case "/coaching":
                image = require('../Images/background/gradientBackground.jpg')
                setHeadline(data.careerCoaching.header)
            break;
            case "/workshops":
                image = require('../Images/background/NettingBackground.jpg')
                setHeadline(data.workshops.header)
            break;
            case "/courses":
                image = require('../Images/background/shadowBackground.jpg')
                setHeadline(data.onlineCourses.header)
            break;
            case "/404":
                setBackground('')
                setNotFound(true);      
            break;
        }
        setBackground(image.default.src);
    }

    return(
        NotFound ? 
            <Section>
                <main>{children}
                </main>
                <NavLink onClick={() => router.push('/')}>Home</NavLink>
            </Section>
            :
            <div style={{position: "absolute", left:'0', top:'0', width: '100%', overflow:'hidden'}}> 
                <Navbar />
                <HeroImage background={background} title={headline}/>
                <main>{children}</main>
                <ChatBot />
                <Footer />
            </div>
        
   
    )
}

export default BaseLayout
   