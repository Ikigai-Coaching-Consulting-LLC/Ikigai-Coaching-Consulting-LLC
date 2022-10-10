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
        let image
        switch(currentRoute) {
            case "/":
                image = require('../Images/background/workspace.jpg')
                setNotFound(false)
                setBackground(image.default.src);      
            break;
            case "/about":
                image = require('../Images/background/passion.jpg')
                setHeadline(data.bio.header)
                setNotFound(false)
                setBackground(image.default.src);     
            break;
            case "/testimonial":
                image = require('../Images/background/codingDeskImage.jpg')
                setNotFound(false)
                setBackground(image.default.src);    
            break;
            case "/contact":
                image = require('../Images/background/contactMe.jpg')
                setHeadline(data.contact.header)
                setNotFound(false)
                setBackground(image.default.src);     
            break;
            case "/coaching":
                image = require('../Images/background/workingOnComputer.jpg')
                setHeadline(data.careerCoaching.header)
                setNotFound(false)
                setBackground(image.default.src);     
            break;
            case "/workshops":
                image = require('../Images/background/groupWorkspace.jpg')
                setHeadline(data.workshops.header)
                setNotFound(false)
                setBackground(image.default.src);     
            break;
            case "/courses":
                image = require('../Images/background/bookshelf.jpg')
                setHeadline(data.onlineCourses.header)
                setNotFound(false)
                setBackground(image.default.src);     
            break;
            case "/404":
                setBackground('')
                setNotFound(true);      
            break;
        }
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
                <HeroImage background={background} title={headline} />
                <main>{children}</main>
                <ChatBot />
                <Footer />
            </div>
        
   
    )
}

export default BaseLayout
   