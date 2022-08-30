import styled from "styled-components";

interface IconBtn {
    chatBotState: boolean,
    onClick: () => void,
    disabled: boolean
}

export const IconButton = styled.button<IconBtn>`
    position: ${props => props.chatBotState ? "absolute" : "static"};
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.disabled ? "#ffffff" : "#9e9c9c"};
    width: 100%;
    height: ${props => props.chatBotState ? "15%" : "100%"};
    &:hover {
        background-color: ${props => props.disabled ? "#ffffff" : "#b6b5b5"};
        cursor: ${props => props.disabled ? "default" : "pointer"};
    }
    transition: 0.3s;
    border: none;
`