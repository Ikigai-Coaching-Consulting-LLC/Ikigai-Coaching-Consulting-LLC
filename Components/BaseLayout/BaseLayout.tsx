import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Navbar from "../Navbar";
import HeroImage from "../HeroImage";
import { ChatBot } from "../ChatBot/ChatBot";
import Footer from "../Footer";
import { NavLink } from "../Footer/Footer.styles";
import { Section } from "../Section/Section";

const BaseLayout = ({ children }: any) => {
    const [ background, setBackground ] = useState('');
    const [ NotFound, setNotFound ] = useState(false)

    const router = useRouter()
    const currentRoute = router.pathname
    useEffect(()=> {
        settingBackground(currentRoute)
    }, [currentRoute])
    console.log('state', background)

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
                setNotFound(false)
                setBackground(image.default.src);     
            break;
            case "/coaching":
                image = require('../Images/background/workingOnComputer.jpg')
                setNotFound(false)
                setBackground(image.default.src);     
            break;
            case "/workshops":
                image = require('../Images/background/groupWorkspace.jpg')
                setNotFound(false)
                setBackground(image.default.src);     
            break;
            case "/courses":
                image = require('../Images/background/bookshelf.jpg')
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
                <HeroImage background={background} />
                <main>{children}</main>
                <ChatBot />
                <Footer />
            </div>
        
   
    )
}

export default BaseLayout
   