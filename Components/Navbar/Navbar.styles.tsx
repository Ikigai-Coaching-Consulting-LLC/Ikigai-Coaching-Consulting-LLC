import styled from 'styled-components'

export const Wrapper = styled.div ` 
    width: 100%;
    height: 200px;
    background: linear-gradient(97deg, rgba(229, 228, 226, .3) 45.6%, rgba(229, 228, 226, .6) 50.7%);
    position:absolute;
    top: 0;
    left:0;
    display: grid;
    grid-auto-flow: column;
    padding: 10px 20px;
    border-bottom: solid gray .5px;

`

export const Header = styled.div `
    height: fit-content;
    width: fit-content;
    background-color: transparent;
    display: grid;
    margin-top: 20px;
    margin-left: 10px;
    justify-content: center;
    justify-items: center;
    align-items: center;
`

export const Icon = styled.img ` 
    height: 100px;
    width: 100px;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
`

export const Title = styled.h2 ` 
    font-size: 18px;

`
export const Content = styled.div `
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
    margin: 0 20px;
    font-size: 18px;
    
    :hover {
        color: lightgray;
    }
`