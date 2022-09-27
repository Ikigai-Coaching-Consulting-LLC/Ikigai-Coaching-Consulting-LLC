import React from "react";
import emailjs from "emailjs-com"

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
        <form onSubmit={sendEmail}>
            <input type="text" placeholder="Full Name" name="name" required/>
            <input type="email" placeholder="Email" name="email" required/>
            <textarea cols={50} rows={8} placeholder="Your Message to Christy" name="message" required/>
            <label htmlFor="question_one"></label>
            <p>Are you currently in an active job search?</p>
            <input type="text" id="question_one" name="question_one_answer" required/>          
            <label htmlFor="question_two"></label>
            <p>What type of assistance are you looking for? [Learn how to network strategically, Resume & LinkedIn optimization, career clarity and exploration, interview techniques, and/or salary negotiation]</p>
            <input type="text" id="question_two" name="question_two_answer" required/>
            <label htmlFor="question_three"></label>
            <p>On a scale of 0-10, how urgent is it for you to achieve your career goals? (0 - not urgent to 10 - extremely urgent)</p>
            <input type="text" id="question_three" name="question_three_answer" required/>
            <label htmlFor="question_four"></label>
            <p>Are you open to investing in coaching if you feel it is a good fit for your goals and needs?</p>
            <input type="text" id="question_four" name="question_four_answer" required/>
            <input type="submit" value="Send Message"/>
        </form>
    )

}