import HeroImage from "../Components/HeroImage"
import { Section } from "../Components/Section/Section"
import data from "../content.json"

import { Content } from '../styles/Home.styles'


const AboutPage = () => {
    const bio = data.bio
    let outside = require('../Components/Images/ChristyOutside.jpg')
    return (
        
        <Section>
            <Content>
                {bio.content}
            </Content>
        </Section>  
    ) 
}

export default AboutPage