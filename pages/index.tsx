import React from "react"
import Navbar from "../Components/Navbar"
import { Section } from "../components/Section/Section";
import { Wrapper } from "../components/Wrapper/Wrapper.style";
import { ChatBot } from "../components/ChatBot/ChatBot";


const Home = () => {

  return (
      
    <Wrapper>
      <Navbar />
      <h1>Home Page</h1>
      <Section />
      <ChatBot />
    </Wrapper>
  )

}

export default Home