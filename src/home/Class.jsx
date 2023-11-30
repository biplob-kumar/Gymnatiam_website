import React from 'react'
import Class1 from "../assets/img/class-2.jpg";
import Class2 from "../assets/img/class-3.jpg";
import Class3 from "../assets/img/class-4.jpg";

const Class = () => {
  return (


    // <!-- WHAT WE CAN OFFER section start -->
<section class="class-offer-section py-5" >
    <div class="comon-header py-5 text-center text-white">
        <h5>OUR CLASSES</h5>
        <h2>WHAT WE CAN OFFER</h2>
    </div>
    <div class="container offer-wraper">
        <div class="offer-card " data-aos="zoom-in">
            <div class="offer-img">
            <img src= {Class1} alt="" />
                <div class="offer-content">
                    <h6>STRENGTH</h6>
                    <h5>WEIGHTLIFTING</h5>
                        <i class="fa-solid fa-angles-right "></i>
                </div>
            </div>
        </div>
        <div class="offer-card " data-aos="zoom-in">
            <div class="offer-img">
            <img src= {Class2} alt="" />
                <div class="offer-content">
                    
                    <h6 class="" >STRENGTH</h6>
                    <h5>WEIGHTLIFTING</h5> 
                        <i class="fa-solid fa-angles-right"></i>
                </div>
            </div>
        </div>
        <div class="offer-card " data-aos="zoom-in">
            <div class="offer-img">
            <img src= {Class3} alt="" />
                <div class="offer-content">
                    <h6>STRENGTH</h6>
                    <h5>WEIGHTLIFTING</h5>
                    <i class="fa-solid fa-angles-right"></i>
                </div>
            </div>
        </div>
        
    </div>
{/* <!--  big offer section start --> */}
    <div class=" container big-wraper  text-center py-5">
        <div class="big-offer-img" data-aos="zoom-in">
        <img src= {Class3} alt="" />
         <div class="big-offer-content py-3">
             <h6>STRENGTH</h6>
             <h1>WEIGHTLIFTING</h1>
             <i class="fa-solid fa-angles-right"></i>
         </div>
        </div>
        <div class="big-offer-img" data-aos="zoom-in-up">
        <img src= {Class3} alt="" />
         <div class="big-offer-content py-3">
             <h6>STRENGTH</h6>
             <h1>WEIGHTLIFTING</h1>
             <i class="fa-solid fa-angles-right"></i>
         </div>
        </div>
     </div>
     {/* <!-- big wraper section end  --> */}
    
    
</section>

// {/* <!-- WHAT WE CAN OFFER section end  --> */}


  )
}

export default Class