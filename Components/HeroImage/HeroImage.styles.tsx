import styled from "styled-components";

export interface Props {
    background?: string
}

export const Wrapper = styled.div<Props> ` 
    width: 100vw;
    height: 100vh;
    border: '1px solid black';
    background: linear-gradient(90deg, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.8) 86.6%), url(${(props:Props) => props.background ? props.background: ''}), lightgrey;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 10px 20px;
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1 ` 

    color: white;
    font-size: 36px;
    margin-top: 250px;


`