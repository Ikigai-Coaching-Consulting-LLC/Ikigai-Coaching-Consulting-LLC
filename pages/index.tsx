import React from "react"
import { Section } from "../components/Section/Section";
import { Wrapper } from "../components/Wrapper/Wrapper.style";
import { ChatBot } from "../components/ChatBot/ChatBot";
import { ContactForm } from "../components/ContactForm/ContactForm";

const Home = () => {

  return (
    <Wrapper>
      <h1>Home Page</h1>
      <Section />
      <ContactForm />
      <ChatBot />
    </Wrapper>
  )

}

export default Home