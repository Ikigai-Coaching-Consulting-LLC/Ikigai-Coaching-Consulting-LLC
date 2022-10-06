import React from "react"
import { useRouter } from 'next/router'

import { Wrapper, Header, Icon, Title, Content, TopNav, BottomNav, NavLink } from './Footer.styles'

const Footer = () => {

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
                <NavLink onClick={()=> handleRouting('/about')}>
                    About
                </NavLink>
                <NavLink onClick={()=> handleRouting('/testimonials')}>
                    Testimonials
                </NavLink>
                <NavLink onClick={()=> handleRouting('/contact')}>
                    Contact Us
                </NavLink>
                <NavLink  onClick={()=> handleRouting('/coaching')}>
                    Career Coaching
                </NavLink>
                <NavLink onClick={()=> handleRouting('/workshops')}>
                    Workshops
                </NavLink>
                <NavLink onClick={()=> handleRouting('/courses')}>
                    Online Courses
                </NavLink>
            </Content>
        </Wrapper>
    )
}

export default Footer