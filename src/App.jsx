import React from 'react'
import Header from './components/header/Heder'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Sevices'
import  { Projects } from './components/portfolio/portfolio'
import Testimonails from './components/tesimonials/testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <div>
      <Nav />
      <Header/>
      <About/>
      <Experience/>
      <Services/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App