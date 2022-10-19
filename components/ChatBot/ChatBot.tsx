import Router from "next/router";
import React from "react";
import { useState, useEffect } from 'react';
import { Icon } from "../Icon/Icon";

import { ChatBotDiv, Title, Content, IconWrapper, NavLink } from './ChatBot.style';

export const ChatBot = () => {

    const [chatBotState, setChatBotState] = useState(false);
    const [buttonDisabled, setButtonEnabled] = useState(false);

    // useEffect(() => {
    //     const chatBotTimer = setTimeout(() => {
    //         setButtonEnabled(false);
    //         setChatBotState(true);
    //     }, 2000);
    //     return () => clearTimeout(chatBotTimer);
    // }, []);

    const handleClick = (string?: string) => {
        if(string){
            Router.push(string)
        } else {
            setChatBotState(!chatBotState)
            setButtonEnabled(!buttonDisabled);
        }
    }

    return (
        <ChatBotDiv chatBotState={chatBotState} >
            <IconWrapper chatBotState={chatBotState} onClick={() => handleClick()}>
                <Icon  chatBotState={chatBotState} setChatBotState={setChatBotState} buttonDisabled={buttonDisabled}/>
            </IconWrapper>
            <Content chatBotState={chatBotState}>
                <Title>Celebrate your Career!</Title>
                <NavLink onClick={() => handleClick('/contact')}>Contact Us!</NavLink>
            </Content>
            
        </ChatBotDiv>
    )
}