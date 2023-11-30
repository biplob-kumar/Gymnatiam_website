import React from 'react'
import Why_chose from './Why_chose';
import OurMenu from './OurMenu';
import Class from './Class';
import Register from './Register';
import Pricing from '../pages/Pricing';
import Footer from './Footer';
import Team from './Team';
import Student from './Student';
import Contact from './Contact';
const HomeLink = () => {
  return (
    <div className=''>
          <Why_chose/>
          <OurMenu/>
          <Class/>
          <Register/>
          <Pricing/>
          <Team/>
          <Student/>
          <Contact/>
          <Footer/>
       
           
    </div>
  )
}

export default HomeLink