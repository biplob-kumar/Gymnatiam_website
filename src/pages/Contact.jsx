import React from 'react'
import Footer from '../home/Footer'
import Contact from '../home/Contact'


const Contacts = () => {
  return (
    <div> 
      <div className="contact bg-c py-5">
        <h4  className='text-white text-center' >Contact page </h4>
      </div>
         <Contact/>
        <Footer/>
    </div>
  )
}

export default Contacts