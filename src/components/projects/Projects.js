import React from 'react';
import { motion } from 'framer-motion';
import "./projects.css";

const projects = [
    {
        thumbnail: "https://res.cloudinary.com/dixot7wtn/image/upload/v1693765641/Your_paragraph_text_vk3o4l.png",
        title: "MERN Stack Ecommerce Web App",
        checkout: "https://blue-inquisitive-pig.cyclic.app/"
    },
    {
        thumbnail: "https://res.cloudinary.com/dixot7wtn/image/upload/c_thumb,w_200,g_face/v1698257185/sadasds_gy2dwy.png",
        title: "MERN Stack Chat App",
        checkout: "https://github.com/TahaTariq73/Mern-Stack-Chat-App"
    },
    {
        thumbnail: "https://res.cloudinary.com/dixot7wtn/image/upload/v1693765640/Add_a_heading_avvj4r.png",
        title: "Snake Game | JavaScript",
        checkout: "https://tahatariq73.github.io/SnakeGame.js/"
    },
    {
        thumbnail: "https://res.cloudinary.com/dixot7wtn/image/upload/v1693765640/Add_a_heading_1_tsnf2k.png",
        title: "2084 Game | Vanilla Javascript",
        checkout: "https://tahatariq73.github.io/2084-Game/"
    },
    {
        thumbnail: "https://res.cloudinary.com/dixot7wtn/image/upload/v1693765641/Calculator_in_Python_zipare.png",
        title: "Calculator Python | Tkinter",
        checkout: "https://github.com/TahaTariq73/Calculator-Py"
    }
]

const Projects = () => {
    return (
        <div className="projects" id='projects'>
            <div className="projects-header">
                <h1> My Recent Projects </h1>
                <p> Here are a few past design projects I've worked on. Hover for Checkout </p>
            </div>

            <div className="projects-grid">
                {projects.map((item) => (
                    <motion.div
                        style={{
                            width: "400px",
                            position: "relative"
                        }}
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
                        <div className="single-project-grid">
                            <img src={item.thumbnail} alt="" />

                            <div className="hidden-info">
                                <h2> {item.title} </h2>
                                <a href={item.checkout} target="_blank" rel="noreferrer"> 
                                    Checkout
                                </a>
                            </div>
                        </div>   
                    </motion.div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;
