import React from "react"
import { useRouter } from 'next/router'

import { Wrapper, Header, Icon, Title, Content, TopNav, BottomNav, NavLink } from './Navbar.styles'

const Navbar = () => {

    const router = useRouter()

    const handleRouting = (route:string) => {
        router.push(route)
    } 

    return (
        <Wrapper>
            <Header>
                <Icon src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/qp8rxi2jae4uinry2dv7" onClick={()=> handleRouting('/')}/>
                <Title>Ikigai Coaching & Consulting, LLC</Title>
            </Header>
            <Content>
                <TopNav>
                    <NavLink onClick={()=> handleRouting('/about')}>
                        About
                    </NavLink>
                    <NavLink onClick={()=> handleRouting('/testimonials')}>
                        Testimonials
                    </NavLink>
                    <NavLink onClick={()=> handleRouting('/contact')}>
                        Contact Us
                    </NavLink>
                </TopNav>
                <BottomNav>
                    <NavLink onClick={()=> handleRouting('/coaching')}>
                        Career Coaching
                    </NavLink>
                    <NavLink onClick={()=> handleRouting('/workshops')}>
                        Workshops
                    </NavLink>
                    <NavLink onClick={()=> handleRouting('/courses')}>
                        Online Courses
                    </NavLink>
                </BottomNav>
            </Content>
        </Wrapper>
    )
}

export default Navbar