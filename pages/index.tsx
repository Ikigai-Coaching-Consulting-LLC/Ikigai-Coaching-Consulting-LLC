import React from "react"
import { Section } from "../Components/Section/Section";
import { ChatBot } from "../Components/ChatBot/ChatBot";
import { ContactForm } from "../Components/ContactForm/ContactForm";
import Navbar from "../Components/Navbar"
import Testimonials from "../Components/Testimonials";

//Styling
import { Wrapper } from "../styles/Home.styles";


const Home = () => {

  return (
      
    <Wrapper>
      <Navbar />
      <h1>Home Page</h1>
      <Section />
      <ContactForm />
      <ChatBot />
      <Testimonials heading="George" subtitle={"Hello"} quote={'The best ever!'} card={true} />
    </Wrapper>

  )

}

export default Home