import styled from "styled-components";

interface CBDiv {
    chatBotState: boolean
}

export const ChatBotDiv = styled.div<CBDiv>`
    position: fixed;
    right: 10px;
    bottom: 10px;
    background: ${props => props.chatBotState ? "#C4C3D0" : "transparent"};
    height: ${props => props.chatBotState ? "300px" : "5%"};
    width: ${props => props.chatBotState ? "200px" : "5%"};
    transition: 0.3s;
    border-radius:  ${props => props.chatBotState ? "10px" : ""};
`
export const IconWrapper = styled.div<CBDiv> ` 
    display: grid;
    justify-content: center;
    border-radius:  ${props => props.chatBotState ? "5px 5px 0 0" : "50%"};
    padding: ${props => props.chatBotState ? "10px" : "20px"};
    background-color: "transparent";
    &:hover {
        background-color: ${props => props.chatBotState ? "#F6F2E8" : "#C4C3D0"};
    }
    z-index: 99;
`
export const Content = styled.div ` 
    display: grid;
    justify-content: center;
    align-items: center;

`
export const Title = styled.h3 ` 
    font-size: 26px;
    margin: 10px auto;
    margin-top: 50px;
    text-align: center;

`