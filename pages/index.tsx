import React from "react"
import { Section } from "../Components/Section/Section";
import { ChatBot } from "../Components/ChatBot/ChatBot";
import { ContactForm } from "../Components/ContactForm/ContactForm";
import Navbar from "../Components/Navbar"

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
    </Wrapper>

  )

}

export default Home