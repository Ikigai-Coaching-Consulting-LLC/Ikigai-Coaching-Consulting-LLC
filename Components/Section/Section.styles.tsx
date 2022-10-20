import styled from "styled-components";


export const Wrapper = styled.div ` 
    display: grid;
    padding: 10px 20px;
    min-height: 80vh;
    justify-items: center;
    align-items: center;

`

export const Content = styled.div ` 
    display: grid;
    justify-content: center;
    align-items: center;


`
export const Card = styled.div ` 
    width: 450px;
    border: solid 1px black;
    padding: 20px 30px;
    border-radius:25px;
    margin: 10px auto;
`
export const CardTitle = styled.h2 ` 


`

export const CardBody = styled.p ` 


`

export const Grid = styled.div ` 
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
`