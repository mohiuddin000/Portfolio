import React from 'react'
import Navbar from './component/Navbar/Navbar.jsx'
import Hero from './component/Hero/Hero.jsx'
import About from './component/About/About.jsx'
import Services from './component/Services/Services.jsx'
import MyWork from './component/Mywork/MyWork.jsx'
import Contact from './component/contact/Contact.jsx'
import Footer from './component/Footer/Footer.jsx'
import Myproject from './component/Myproject/Myproject.jsx'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Myproject />
        {/* <Services/>
        <MyWork/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App