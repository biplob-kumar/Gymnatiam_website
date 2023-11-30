import React from 'react'
import '../home/foooter.css'
import Logo from "../assets/img/logo.png";
const Footer = () => {
  return (
    // <!--  footer start -->
    <section class="footer-main py-5  bg-dark ">
     <div class="footer-logo   text-center">
        <img src= {Logo} alt="" />
     </div>
     <div class="container footer-wraper">
      
          <div class="footer-content py-5">
               <div class="content-header">
                 <h4>About us</h4>
                 <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set  magnis dis parturient montes.</p>
              
                     <i class="fa-brands fa-facebook "></i>
                     <i class="fa-brands fa-facebook-messenger mx-2"></i>
                     <i class="fa-brands fa-linkedin mx-2"></i>
                     <i class="fa-brands fa-whatsapp mx-2"></i>
               </div>
          </div>
    
          <div class="footer-content py-5">
             <div class="content-header">
               <h4>New Menu</h4>
               <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set  magnis dis parturient montes.</p>
            
                  
             </div>
        </div>
 
        <div class="footer-content py-5">
         <div class="content-header">
           <h4>Contact Us</h4>
           <div class="contact-icon">
             <p> <i class="fa-solid fa-signs-post"></i> 6 E Esplanade, St Albans VIC 3021, Australia</p>
             <p> <i class="fa-solid fa-mobile-screen-button"></i> +91 80005 89080</p>
             <p><i class="fa-solid fa-message"></i> support@foodfunday.com</p>
         
           </div>
          
         </div>
    </div>
    <div class="footer-content py-5">
     <div class="content-header">
       <h4>Opening Hours</h4>
        <p>Monday - Thursday</p>
        <p class="text-muted" >11:00 AM - 9:00 PM</p>
        <p>Monday - Thursday</p>
        <p class="text-muted" >1:00 AM - 5:00 PM</p>
    
   
     </div>
   
 </div>

     </div>
     <hr />
     <p class="text-center text-white mt-5" >Copyright ©All right reserve  Developer biplob </p>
 </section>
 
 
   
 
  )
}

export default Footer