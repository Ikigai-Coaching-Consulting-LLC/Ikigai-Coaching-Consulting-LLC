import styled from "styled-components";

export const Form = styled.form `  
    display:grid;
    align-content: center;
    justify-content: start;
    width: 80%;
    padding: 40px 80px;
`

export const Label = styled.label ` 
    font-size: 18px;
    margin: 20px 10px;
`

export const Input = styled.input ` 
    font-size: 18px;
    margin: 20px 10px;
    padding: 10px;
    width: 100%;

    &.checkbox{
        height: 25px;
        width: 25px;
        float: right;
    }

`

export const NumberInput = styled.input ` 
    font-size: 18px;
    margin: 20px 10px;

`

export const Dropdown = styled.select ` 
    font-size: 18px;
    margin: 20px 10px;
    padding: 10px;

`

export const Option = styled.option<{value:string}> ` 
    font-size: 18px;
    padding: 10px 20px;

`

export const TextArea = styled.textarea ` 
    resize: none;
    height: 200px;
    padding: 20px;
    border-radius: 15px;
    margin: 20px 0;
    
`
export const SubmitButton = styled.button ` 
    border-radius: 5px;
    width: fit-content;
    color: white;
    border: solid 2px white;
    box-shadow: 0px 0px 10px 1px black;
    background: rgba(0,0,0,1);
    justify-self: end;
    margin: 20px 0;
    padding: 10px 20px;

    &:hover {
        background: rgba(100,100,100,1)
    }

`