import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IconButton } from "./Icon.style";

interface IconProps {
    chatBotState: boolean,
    setChatBotState: React.Dispatch<React.SetStateAction<boolean>>,
    buttonDisabled: boolean
}

export const Icon: React.FC<IconProps> = ({ chatBotState, setChatBotState, buttonDisabled }) => {
    return (
        <IconButton chatBotState={chatBotState} onClick={() => setChatBotState(!chatBotState)} disabled={buttonDisabled}>
            <IconContext.Provider value={{ color: "white" }}>
                {chatBotState ? <FaChevronDown/> : <FaChevronUp/>}
            </IconContext.Provider>
        </IconButton>
    )
}