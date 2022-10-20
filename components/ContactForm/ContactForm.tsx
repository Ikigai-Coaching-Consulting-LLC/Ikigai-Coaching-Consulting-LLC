import React from "react";
import emailjs from "emailjs-com"

import { Dropdown, Form, Label, Input, NumberInput, TextArea, SubmitButton, Option } from './ContactForm.style'

export const ContactForm = () => {

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm("service_3jbohb9", "template_8jia6vv", e.currentTarget, "Y-1HdFE2hE78NaRZn")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            throw error
        });
        e.currentTarget.reset();
    };

    return (
        <Form onSubmit={sendEmail}>
            <Label htmlFor="name">Full Name:</Label>
            <Input type="text" id="name" name="name" required/>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" required/>
            <Label htmlFor="question_one">I am actively job hunting.</Label>
            <Input type="checkbox" className={"checkbox"} id="question_one" name="question_one_answer" required defaultChecked/>          
            <Label htmlFor="question_two">I am looking for help with...</Label>
            <Dropdown id="question_two" name="question_two_answer" required>
                <Option value='Network Strategy'>
                    Networking strategically
                </Option>
                <Option value='Resume/LinkedIn'>
                    Resume/LinkedIn optimization
                </Option>
                <Option value='Career Clarity'>
                    Career Clarity
                </Option>
                <Option value='Interview Techniques'>
                    Interview Techniques
                </Option>
                <Option value='Salary Negotiation'>
                    Salary Negotiation
                </Option>
            </ Dropdown>
            <Label htmlFor="question_three">How urgent is it for you to achieve your career goals? (0 - not urgent / 10 - extremely urgent)</Label>
            <NumberInput type="number" id="question_three" name="question_three_answer" required min='0' max='10' />
            <Label htmlFor="question_four">Are you open to investing in coaching if you feel it is a good fit for your goals and needs?</Label>
            <Dropdown id="question_four" name="question_four_answer" required>
                <Option value='Yes' >Yes</Option>
                <Option value='No'>No</Option>
            </Dropdown>
            <TextArea placeholder="Your Message to Christy" name="message" required/>
            <SubmitButton type="submit">Lets chat!</SubmitButton>
        </Form>
    )

}