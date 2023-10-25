import React from 'react';
import ProgrammingSvg from "../../assets/images/programming.svg";
import { motion } from "framer-motion";
import "./about.css";

// MUI Icons

import WavingHandIcon from '@mui/icons-material/WavingHand';

const About = () => {
    return (
        <div className="about" id="about">
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
            >
                <div className="about-me">
                    <h1> Hi, I’m Taha. Nice to meet you. </h1>
                    <p> MERN Stack Developer with over 2 years of experience in developing scalable web applications and REST APIs. Skilled in leveraging the power of MongoDB, Express.js, React.js, and Node.js to create web applications. </p>
                
                    <a href="#contact">
                        <button className="hello-btn"> 
                            Say Hello 
                            <WavingHandIcon />
                        </button>
                    </a>
                </div>
            </motion.div>

            <img src={ProgrammingSvg} alt="" draggable="false" className="about-svg"  />
        </div>
    )
}

export default About;