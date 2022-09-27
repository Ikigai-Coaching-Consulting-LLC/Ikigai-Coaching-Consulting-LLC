import styled from 'styled-components'

export const Wrapper = styled.div ` 
    width: 100%;
    background-color: transparent;
    display: grid;
    grid-auto-flow: column;
    padding: 20px 40px;
    border-bottom: solid gray .5px;

`

export const Header = styled.div ` 
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
`

export const Icon = styled.img ` 
     height: 100px;
     width: 100px;
     border-radius: 25px;
     align-self: start;

`

export const Title = styled.h2 ` 
    font-size: 18px;

`
export const Content = styled.div ` 
    width: 100%;
    margin: 0 20px;
    display: grid;
    justify-content: end;
    justify-items: end;
    align-items: center;

`

export const TopNav = styled.div ` 
    font-size: 24px;

`

export const BottomNav = styled.div `
    font-size: 36px;
`

export const NavLink = styled.button ` 
    border: none;
    background-color: transparent;
    color: gray;
    text-transform: capitalize;
    margin: 0 10px;
    font-size: 18px;
    
    :hover {
        color: lightgray;
    }
`