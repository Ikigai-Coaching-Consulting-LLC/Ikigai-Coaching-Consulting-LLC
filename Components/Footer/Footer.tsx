import React from "react"
import { useRouter } from 'next/router'

import { Wrapper, Header, Icon, Title, Content, TopNav, BottomNav, NavLink } from './Footer.styles'

const Navbar = () => {

    const router = useRouter()

    const handleRouting = (route:string) => {
        router.push(route)
    } 

    return (
        <Wrapper>
            <Header>
                <Title>Ikigai Coaching & Consulting, LLC</Title>
            </Header>
            <Content>
            </Content>
        </Wrapper>
    )
}

export default Navbar