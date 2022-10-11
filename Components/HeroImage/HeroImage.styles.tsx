import styled from "styled-components";

export interface Props {
    background?: string
}

export const Wrapper = styled.div<Props> ` 
    width: 100vw;
    height: 80vh;
    border: '1px solid black';
    /* background: linear-gradient(90deg, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.8) 86.6%), url(${(props:Props) => props.background ? props.background: ''}), lightgrey; */
    background: linear-gradient(112.6deg, rgba(200,200,200,1), rgba(250,250,250,1));
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 10px 20px;
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1 ` 
    color: black;
    font-size: 36px;
    margin-top: 200px;


`