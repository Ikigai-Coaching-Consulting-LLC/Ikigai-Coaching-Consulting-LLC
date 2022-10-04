import styled from 'styled-components'

export const Wrapper = styled.div ` 
    width: 100%;
    height: 200px;
    background-color: transparent;
    display: grid;
    grid-auto-flow: column;
    padding: 10px 20px;
    border-bottom: solid gray .5px;
    color: black;

`

export const Header = styled.div `
    position: absolute;
    left: 10px; 
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
    position : absolute;
    right: 10px;
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
    text-transform: capitalize;
    margin: 0 10px;
    font-size: 18px;
    
    :hover {
        color: lightgray;
    }
`