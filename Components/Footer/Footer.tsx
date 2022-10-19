import React from "react"
import { useRouter } from 'next/router'

import { Wrapper, Nav, Header, Title, Content, NavLink, RightNav, LeftNav, CopyWriteBar, Copy } from './Footer.styles'

const Footer = () => {

    const router = useRouter()

    const handleRouting = (route:string) => {
        router.push(route)
    } 

    return (
        <Wrapper>
            <Content>
                <Content>
                    <Nav>
                        <RightNav>
                            <NavLink  onClick={()=> handleRouting('/coaching')}>
                                Career Coaching
                            </NavLink>
                            <NavLink onClick={()=> handleRouting('/workshops')}>
                                Workshops
                            </NavLink>
                            <NavLink onClick={()=> handleRouting('/courses')}>
                                Online Courses
                            </NavLink>
                        </RightNav>
                    <LeftNav>
                            <NavLink onClick={()=> handleRouting('/about')}>
                                About
                            </NavLink>
                            <NavLink onClick={()=> handleRouting('/testimonials')}>
                                Testimonials
                            </NavLink>
                            <NavLink onClick={()=> handleRouting('/contact')}>
                                Contact Us
                            </NavLink>
                        </LeftNav>
                        </Nav>
                </Content>
                <Header>
                    <Title>Ikigai Coaching & Consulting, LLC</Title>
                </ Header>
            </Content>
            <Content>
                <CopyWriteBar>
                    <Content>&copy;Ikigai Coaching & Consulting, LLC</Content>
                     <Copy>&copy;Ikigai Coaching & Consulting, LLC</Copy>
                     <Content>&copy;Ikigai Coaching & Consulting, LLCs</Content>
                </CopyWriteBar>
            </Content>
        </Wrapper>
    )
}

export default Footer