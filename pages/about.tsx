import { Section } from "../Components/Section/Section"
import data from "../content.json"


const AboutPage = () => {
    const bio = data.bio
    
    return (

        <Section header={bio.header} typesOf={[bio.content]}>
        </Section>  
    ) 
}

export default AboutPage