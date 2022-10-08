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

    const settingBackground = (currentRoute:string) => {
        switch(currentRoute) {
            case "/":
                setNotFound(false)
                setBackground("http://constructionblog.autodesk.com/wp-content/uploads/2020/04/construction-zoom-background-9.jpg");      
            break;
            case "/about":
                setBackground("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-teacher-s-college-classroom-coaching-course-poster-background-image_188494.jpg");      
            break;
            case "/testimonial":
                setBackground("http://constructionblog.autodesk.com/wp-content/uploads/2020/04/construction-zoom-background-9.jpg");      
            break;
            case "/contact":
                setBackground("http://constructionblog.autodesk.com/wp-content/uploads/2020/04/construction-zoom-background-9.jpg");      
            break;
            case "/coaching":
                setBackground("http://constructionblog.autodesk.com/wp-content/uploads/2020/04/construction-zoom-background-9.jpg");      
            break;
            case "/workshops":
                setBackground("http://constructionblog.autodesk.com/wp-content/uploads/2020/04/construction-zoom-background-9.jpg");      
            break;
            case "/courses":
                setBackground("http://constructionblog.autodesk.com/wp-content/uploads/2020/04/construction-zoom-background-9.jpg");      
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
   