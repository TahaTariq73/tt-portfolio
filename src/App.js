import React, { Fragment, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Fragment>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  )
}

export default App;