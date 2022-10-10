import { Section } from "../Components/Section/Section"
import data from "../content.json"

import { Content } from '../styles/Home.styles'


const AboutPage = () => {
    const bio = data.bio
    
    return (

        <Section>
            <Content>
                {bio.content}
            </Content>
        </Section>  
    ) 
}

export default AboutPage