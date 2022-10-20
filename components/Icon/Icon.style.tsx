import { prependOnceListener } from "process";
import styled from "styled-components";

interface IconBtn {
    chatBotState: boolean,
    onClick: () => void,
    disabled: boolean
}

export const IconButton = styled.button<IconBtn>`
    display: grid;
    justify-content: center;
    align-items: center;
    color: black;
    transition: 0.3s;
    background-color: transparent;
    border: none;
    margin: 0 auto;
    z-index: -1;

`