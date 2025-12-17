import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Educations from "./components/Educations"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="min-h-screen bg-sky-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Educations />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
