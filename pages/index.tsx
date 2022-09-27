import React from "react"
import { Section } from "../components/Section/Section";
import { Wrapper } from "../components/Wrapper/Wrapper.style";
import { ChatBot } from "../components/ChatBot/ChatBot";
import { ContactForm } from "../components/ContactForm/ContactForm";
import Navbar from "../Components/Navbar"
import { Section } from "../Components/Section/Section";
import { ChatBot } from "../Components/ChatBot/ChatBot";

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