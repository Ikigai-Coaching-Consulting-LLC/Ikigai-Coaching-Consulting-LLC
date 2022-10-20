import styled from "styled-components";

interface CBDiv {
    chatBotState: boolean
}

export const ChatBotDiv = styled.div<CBDiv>`
    position: fixed;
    right: 10px;
    bottom: 10px;
    background: ${props => props.chatBotState ? "#C4C3D0" : "transparent"};
    height: ${props => props.chatBotState ? "300px" : ""};
    width: ${props => props.chatBotState ? "200px" : ""};
    transition: .4s ease-in-out;
    border-radius:  ${props => props.chatBotState ? "10px" : ""};
    z-index: 1;
`
export const IconWrapper = styled.div<CBDiv> ` 
    display: grid;
    justify-content: center;
    border-radius:  ${props => props.chatBotState ? "5px 5px 0 0" : "25%"};
    padding: ${props => props.chatBotState ? "10px" : "20px"};
    background-color: "transparent";
    cursor: pointer;

    &:hover {
        background: ${props => props.chatBotState ? "rgba(250,250,250,.6)" : "rgba(100,100,100,.6)"};
    }
    
`
export const Content = styled.div<CBDiv> ` 
    justify-content: center;
    align-items: 'center';
    height: 100%;
    display: ${props => props.chatBotState ? "grid" : "none"};

`
export const Title = styled.h3 ` 
    font-size: 18px;
    width: 80%;
    margin: 10px auto;
    text-align: center;

`

export const NavLink = styled.button `
    border: none;
    background: transparent;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
        background: rgba(250,250,250,.6);
    }
`