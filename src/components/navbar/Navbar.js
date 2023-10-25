import React, { Fragment, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Sidebar from '../sidebar/Sidebar';
import "./navbar.css";

// MUI Icons

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const themeHandler = () => setDarkMode(!darkMode);

    const openHandler = () => setIsOpen(!isOpen);

    return (
        <Fragment>
            <div className="nav-body">
                <nav className="navbar">
                    <div className="nav-links">
                        <a href="/" className="logo">
                            <span> t. </span>
                        </a>

                        <ul>
                            <li> <a href="#home" className="active"> Home </a> </li>
                            <li> <a href="#about"> About </a> </li>
                            <li> <a href="#projects"> Projects </a> </li>
                            <li> <a href="#contact"> Contact </a> </li>
                        </ul>
                    </div>

                    <div className="nav-icons">
                        <ul>
                            <li> 
                                <a href="https://github.com/TahaTariq73" target="_blank" rel="noreferrer"> 
                                    <GitHubIcon /> 
                                </a> 
                            </li>

                            <li> 
                                <a href="https://www.linkedin.com/in/taha-tariq-12022b230/" target="_blank" rel="noreferrer">
                                    <LinkedInIcon />
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://twitter.com/TahaTariq72" target="_blank" rel="noreferrer">
                                    <TwitterIcon /> 
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100073800926103" target="_blank" rel="noreferrer"> 
                                    <FacebookIcon /> 
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="responsive-menu">
                        <IconButton style={{ color: "#1B1B1B" }} onClick={openHandler}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </nav>
            </div>

            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                themeHandler={themeHandler}
                darkMode={darkMode}  
            />
        </Fragment>
    )
}

export default Navbar;