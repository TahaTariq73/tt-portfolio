import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import "./sidebar.css";

// MUI Icons

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';

function SidebarLink ({ link, icon }) {
    return (
        <li> 
            <a href={link} target="_blank" rel="noreferrer"> 
                {icon}
            </a> 
        </li>
    )
}

const Sidebar = ({ isOpen, setIsOpen, darkMode, themeHandler }) => {
    return (
        <Drawer
            open={isOpen}
            anchor="right"
        >
            <div className="sidebar">
                <div className="close-sidebar-icon" onClick={() => setIsOpen(false)}>
                    <IconButton style={{ color: "#1B1B1B" }}>
                        <CloseIcon />
                    </IconButton>
                </div>

                <ul className="sidebar-links">
                    <li> <a href="#home"> Home </a> </li>
                    <li> <a href="#about"> About </a> </li>
                    <li> <a href="#projects"> Projects </a> </li>
                    <li> <a href="#contact"> Contact </a> </li>
                </ul>

                <ul className="res-menu-icon-list">
                    <SidebarLink link={"https://github.com/TahaTariq73"} icon={<GitHubIcon />} />
                    <SidebarLink link={"https://www.linkedin.com/in/taha-tariq-12022b230/"} icon={<LinkedInIcon />} />
                    <SidebarLink link={"https://twitter.com/TahaTariq72"} icon={<TwitterIcon />} />
                    <SidebarLink link={"https://www.facebook.com/profile.php?id=100073800926103"} icon={<FacebookIcon />} />
                </ul>
            </div>
        </Drawer>
    )
}

export default Sidebar;