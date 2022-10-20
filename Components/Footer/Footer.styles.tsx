import styled from 'styled-components'

export const Wrapper = styled.div ` 
    margin: 0 auto;
    width: 100%;
    min-height: 60vh;
    background: rgba(100, 100, 100, 0.6);
    border-top: solid rgba(100, 100, 100, 1) .5px;
  `
  
export const Nav = styled.div `
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
`

export const Header = styled.div `
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 10px 20px;
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
    min-height: 50px;
    padding-top: 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr ;
    align-items: center;
    grid-auto-flow: column;

`

export const RightNav = styled.div ` 
    font-size: 24px;
    padding: 10px 20px;
    width: 300px;
    display: grid;
    justify-items: start;

`

export const LeftNav = styled.div `
    font-size: 36px;
    display: grid;
    justify-items: start;
    padding: 10px 20px;
`

export const NavLink = styled.button` 
    border: none;
    background-color: transparent;
    text-transform: capitalize;
    font-size: 18px;
    padding: 10px 20px;
    cursor: pointer;
    color :rgba( 250,248, 448, 1 );
    
    :hover {
        color: lightgray;
    }
`
export const Copy = styled.div ` 
    font-size: 16px;
    padding: 10px 20px;

`

export const CopyWriteBar = styled.div ` 
    position: absolute;
    bottom: 0; 
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;

`