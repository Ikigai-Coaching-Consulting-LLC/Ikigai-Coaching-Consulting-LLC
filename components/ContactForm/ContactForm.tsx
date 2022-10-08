import React from "react";
import emailjs from "emailjs-com"

import { Form } from './ContactForm.style'

export const ContactForm = () => {

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm("service_3jbohb9", "template_8jia6vv", e.currentTarget, "Y-1HdFE2hE78NaRZn")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.currentTarget.reset();
    };

    return (
        <Form onSubmit={sendEmail}>
            <input type="text" placeholder="Full Name" name="name" required/>
            <input type="email" placeholder="Email" name="email" required/>
            <textarea placeholder="Your Message to Christy" name="message" required/>
            <label htmlFor="question_one">I am actively job hunting.</label>
            <input type="checkbox" id="question_one" name="question_one_answer" required checked/>          
            <label htmlFor="question_two">I am looking for help with...</label>
            <select id="question_two" name="question_two_answer" required>
                <option value='Network Strategy'>
                    Networking strategically
                </option>
                <option value='Resume/LinkedIn'>
                    Resume/LinkedIn optimization
                </option>
                <option value='Career Clarity'>
                    Career Clarity
                </option>
                <option value='Interview Techniques'>
                    Interview Techniques
                </option>
                <option value='Salary Negotiation'>
                    Salary Negotiation
                </option>
            </select>
            <label htmlFor="question_three"></label>
            <p>How urgent is it for you to achieve your career goals? (0 - not urgent / 10 - extremely urgent)</p>
            <input type="number" id="question_three" name="question_three_answer" required min='0' max='10' step="0.5"/>
            <output></output>
            <label htmlFor="question_four">Are you open to investing in coaching if you feel it is a good fit for your goals and needs?</label>
            <select id="question_four" name="question_four_answer" required>
                <option value='Yes' >Yes</option>
                <option value='No'>No</option>
            </select>
            <input type="submit" value="Send Message"/>
        </Form>
    )

}