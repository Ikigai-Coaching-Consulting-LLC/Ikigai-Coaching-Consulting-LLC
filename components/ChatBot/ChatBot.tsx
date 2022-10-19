import React from "react";
import { useState, useEffect } from 'react';
import { Icon } from "../Icon/Icon";

import { ChatBotDiv, Title, Content, IconWrapper } from './ChatBot.style';

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

    const handleClick = () => {
        setChatBotState(!chatBotState)
        setButtonEnabled(!buttonDisabled);
    }

    return (
        <ChatBotDiv chatBotState={chatBotState} onClick={handleClick}>
            <IconWrapper chatBotState={chatBotState}>
                <Icon chatBotState={chatBotState} setChatBotState={setChatBotState} buttonDisabled={buttonDisabled}/>
            </IconWrapper>
            <Content>
                <Title>Celebrate your Career!</Title>
            </Content>
            
        </ChatBotDiv>
    )
}