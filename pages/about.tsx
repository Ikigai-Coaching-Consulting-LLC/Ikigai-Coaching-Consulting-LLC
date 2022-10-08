import { Section } from "../Components/Section/Section"
import data from "../content.json"
// import bio_image from '../Components/Images/HeadshotTall.jpg'

import { Wrapper, Header, Content } from "../styles/Home.styles"

const AboutPage = () => {
    const bio = data.bio
    
    return (

        <Section header={bio.header} typesOf={[bio.content]}>
        </Section>  
    ) 
}

export default AboutPage