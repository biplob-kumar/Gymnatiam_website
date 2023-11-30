import React from 'react'
import Gallaary1 from "../assets/img/gallery-4.jpg";
import Gallaary2 from "../assets/img/gallery-1.jpg";
import Gallaary3 from "../assets/img/gallery-2.jpg";
import Gallaary4 from "../assets/img/gallery-3.jpg";
import Gallaary5 from "../assets/img/gallery-5.jpg";
import Gallaary6 from "../assets/img/gallery-6.jpg";
import Gallaary7 from "../assets/img/gallery-2.jpg";
import Gallaary8 from "../assets/img/gallery-1.jpg";
import Gallaary9 from "../assets/img/gallery-1.jpg";
import Gallaary10 from "../assets/img/gallery-2.jpg";

const Student = () => {
  return (
    // <!-- grid-gallaru  start -->

    <section class="grid-gallary text-center text-white">
        <div class="comon-header py-5">
            <h5>OUR GYM</h5>
            <h2>STUDENT WITH EXPERTS</h2>
        </div>
        <div class=" container container-wraper" data-aos="zoom-in">
            <div class="box a">
           <img src= {Gallaary1} alt="" />
            </div>
            <div class="box b">
              <img src= {Gallaary2} alt="" />
            </div>
            <div class="box c">
               <img src= {Gallaary3} alt="" />
            </div>
            <div class="box d">
            <img src= {Gallaary4} alt="" />
            </div>
            <div class="box e">
              <img src= {Gallaary5} alt="" />
            </div>
            <div class="box f">
             <img src= {Gallaary6} alt="" />
            </div>
            <div class="box g">
         <img src= {Gallaary7} alt="" />
            </div>
            <div class="box h">
             <img src= {Gallaary8} alt="" />
            </div>
            <div class="box i">
                <img src= {Gallaary9} alt="" />
            </div>
            <div class="box j">
              <img src= {Gallaary10} alt="" />
            </div>
          
        </div>
    </section>
  
    
  )
}

export default Student