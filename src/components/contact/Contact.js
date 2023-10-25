import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ubu7mli', 
            'template_dlxpbxp', 
            form.current, 
            'GfhDOnBk-PG1Ga-3Z'
        )
        .then((result) => {
            console.log(result.text);
            alert("Your message has been sent :)");
        }, (error) => {
            console.log(error.text);
        })
    }

    return (
        <div className="contact" id="contact">
            <motion.div 
                initial={{ 
                    y: 100, 
                    opacity: 0.4,
                    scale: 0.7,
                    zIndex: 1
                }}
                whileInView={{ 
                    y: 0, 
                    opacity: 1,
                    scale: 1,
                    zIndex: 2
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 2,
                    type: "spring",
                    bounce: 0.6
                }}
                style={{ width: "100%" }}
            >
                <div className="contact-page">
                    <h1> Contact Me </h1>

                    <form ref={form} className="contact-form" onSubmit={sendEmail}>                    
                        <TextField
                            label="Name" 
                            variant="outlined"
                            name="user_name"
                            fullWidth
                        />

                        <TextField 
                            label="Email" 
                            variant="outlined"
                            name="user_email"
                            type="text"
                            fullWidth 
                        />

                        <TextField
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            fullWidth
                        />

                        <button className="submit-btn" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact;