import data from "../content.json";
import { ContactForm } from "../Components/ContactForm/ContactForm";

interface Contact {
    header: string
}

const contactData:Contact = data.contact;

const ContactPage = () => {
    return (
        <>
            <h1>Contact Me</h1>
            <h2>{contactData.header}</h2>
            <ContactForm />
        </>
    )
}

export default ContactPage;