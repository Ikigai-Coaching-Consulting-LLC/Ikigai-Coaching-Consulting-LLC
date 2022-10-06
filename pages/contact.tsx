import data from "../content.json";
import { Wrapper } from "../styles/Home.styles";
import { Section } from "../Components/Section/Section";
import { ContactForm } from "../Components/ContactForm/ContactForm";

interface Contact {
    header: string
}

const contactData:Contact = data.contact;

const ContactPage = () => {
    return (
        <Wrapper>
            <Section header={contactData.header}>
                <ContactForm />
            </Section>
        </Wrapper>
    )
}

export default ContactPage;