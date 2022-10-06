import React from "react"
import { Section } from "../Components/Section/Section";
import { ChatBot } from "../Components/ChatBot/ChatBot";
import Navbar from "../Components/Navbar"
import Testimonials from "../Components/Testimonials";

//Styling
import { Wrapper } from "../styles/Home.styles";
import Footer from "../Components/Footer";


const Home = () => {

  return (
      
    <Wrapper>
      <Navbar />
      <h1>Home Page</h1>
      <Section />
      <ChatBot />
      <Testimonials heading="George" subtitle={"Hello"} quote={'The best ever!'} card={true} />
    </Wrapper>

  )

}

export default Home