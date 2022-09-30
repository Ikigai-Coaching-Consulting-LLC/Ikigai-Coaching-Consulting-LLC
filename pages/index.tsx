import React from "react"
import { ChatBot } from "../Components/ChatBot/ChatBot";
import Navbar from "../Components/Navbar"

//Styling
import { Wrapper } from "../styles/Home.styles";

const Home = () => {

  return (
      
    <Wrapper>
      <Navbar />
      <h1>Home Page</h1>
      <ChatBot />
    </Wrapper>

  )

}

export default Home