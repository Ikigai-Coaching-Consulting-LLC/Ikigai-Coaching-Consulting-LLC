import React from "react";
import { ChatBotDiv } from './ChatBot.style';
import { useState, useEffect } from 'react';
import { Icon } from "../Icon/Icon";

export const ChatBot = () => {

    const [chatBotState, setChatBotState] = useState(false);
    const [buttonDisabled, setButtonEnabled] = useState(true);

    useEffect(() => {
        const chatBotTimer = setTimeout(() => {
            setButtonEnabled(false);
            setChatBotState(true);
        }, 2000);
        return () => clearTimeout(chatBotTimer);
    }, []);

    return (
        <ChatBotDiv chatBotState={chatBotState}>
            <Icon chatBotState={chatBotState} setChatBotState={setChatBotState} buttonDisabled={buttonDisabled}/>
        </ChatBotDiv>
    )
}