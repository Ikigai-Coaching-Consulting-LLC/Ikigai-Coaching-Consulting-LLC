import styled from "styled-components";

export interface Props {
    background?: string
}

export const Wrapper = styled.div<Props> ` 
    width: 100vw;
    height: 80vh;
    border: '1px solid black';
    background: linear-gradient(90deg, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.8) 86.6%), url(${(props:Props) => props.background ? props.background: ''}), lightgrey;
    background-size:cover ;
    background-repeat: no-repeat;
    background-position: center;
    padding: 10px 20px;
`;

export const Image = styled.img` 


`