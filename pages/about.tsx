import data from "../content.json"
// import bio_image from '../Components/Images/HeadshotTall.jpg'

import { Wrapper, Header, Content } from "../styles/Home.styles"

const AboutPage = () => {
    const bio = data.bio
    
    return (

        <Wrapper>
            <Header>{bio.header}</Header>
            <Content>
                <p>{bio.content}</p>
            </Content>
        </Wrapper>  
    ) 
}

export default AboutPage