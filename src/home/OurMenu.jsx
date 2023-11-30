import React from 'react'
import Menu1 from "../assets/img/manu1.jpg";
import Menu2 from "../assets/img/manu-2.jpg";
import Menu3 from "../assets/img/manu-3.jpg";


const OurMenu = () => {
  return (
    // <!--  manu section start -->
    <section class="manu-section " >
      <div class="manu-header text-center py-5">
        <h5>OUR MANU</h5>
        <h2>THIS RULE IS TO GO</h2>
      </div>
      <div class="container manu-wraper">
        <div class="manu-left" data-aos="fade-up"
          data-aos-anchor-placement="center-center">
          <h4>MORNING-MANU</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod cupiditate ea pariatur quaerat totam explicabo minima voluptate ratione natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod cupiditate ea pariatur quaerat totam explicabo minima voluptate ratione natus! explicabo minima voluptate ratione natus! voluptate ratione </p>
        </div>
        <div class="manu-right-img" data-aos="fade-up"
          data-aos-anchor-placement="center-center">
          <img src={Menu1} alt="" />
        </div>
        <div class="manu-left" data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
          <h4>AFTERNOON-MANU</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod cupiditate ea pariatur quaerat totam explicabo minima voluptate ratione natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod cupiditate ea pariatur quaerat totam explicabo minima voluptate ratione natus! explicabo minima voluptate ratione natus! voluptate ratione </p>
        </div>
        <div class="manu-right-img" data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
          <img src={Menu2} alt="" />
        </div>
        <div class="manu-left" data-aos="fade-up"
          data-aos-anchor-placement="center-center">
          <h4>EVENING-MANU</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod cupiditate ea pariatur quaerat totam explicabo minima voluptate ratione natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod cupiditate ea pariatur quaerat totam explicabo minima voluptate ratione natus! explicabo minima voluptate ratione natus! voluptate ratione </p>
        </div>
        <div class="manu-right-img" data-aos="fade-up"
          data-aos-anchor-placement="center-center">
          <img src={Menu3} alt="" />
        </div>


      </div>

    </section>


    // {/* <!--  manu section end --> */}

  )
}

export default OurMenu