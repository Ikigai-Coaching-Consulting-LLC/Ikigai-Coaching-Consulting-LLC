import Navbar from "./Navbar";
import HeroImage from "./HeroImage";
import { ChatBot } from "./ChatBot/ChatBot";
import Footer from "./Footer";

export default function({ children }: any)  {

    return(
        <div style={{position: "absolute", left:'0', top:'0'}}> 
            <Navbar />
            <HeroImage />
            <main>{children}</main>
            <ChatBot />
            <Footer />
        </div>
   
    )
}
   