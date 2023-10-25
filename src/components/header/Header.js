import React from 'react';
import Avatar from "../../assets/images/me.png";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
    return (
        <div className="home" id="home">
            <div className="header">
                <motion.div
                    initial={{ 
                        y: 100, 
                        opacity: 0.4,
                        scale: 0.7 
                    }}
                    whileInView={{ 
                        y: 0, 
                        opacity: 1,
                        scale: 1,
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
                    <div className="actual-header"> 
                        <h1> A MERN STACK DEVELOPER </h1>
                        <p> Eat, code, sleep & repeat </p>

                        <img src={Avatar} alt="" className="header-avatar" />
                    </div>
                </motion.div>
            </div>
        </div>   
    )
}

export default Header;