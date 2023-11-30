import React from 'react'
import Team1 from "../assets/img/team-1.jpg";
import Team2 from "../assets/img/team-2.jpg";
import Team3 from "../assets/img/team-3.jpg";
import Team4 from "../assets/img/team-4.jpg";
const Team = () => {
  return (
    // <!--  team-section start -->
    <section class="team-secion bg-black " >
        <div class="comon-header py-5 text-center text-white">
            <h5>OUR TEAM</h5>
            <h2>TRAIN WITH EXPERTS</h2>
        </div>
        <div class="container team-wraper">
            <div class="team py-3"data-aos="fade-right">
                <div class="team-img py-1">
                 <img src= {Team1} alt="" />
                    <div class="team-content text-center">
                        <h4 class="d-block text-white mt-2" >Athart-rachel</h4>
                        <p>Gym Trainer</p>
                    </div>
                </div>
            </div>
            <div class="team py-3" data-aos="fade-left">
                <div class="team-img py-1">
                <img src= {Team2} alt="" />
                    <div class="team-content text-center">
                        <h4 class="d-block text-white mt-2" >Athart-rachel</h4>
                        <p>Gym Trainer</p>
                    </div>
                </div>
            </div>
            <div class="team py-3" data-aos="fade-right">
                <div class="team-img py-1">
                <img src= {Team3} alt="" />
                    <div class="team-content text-center">
                        <h4 class="d-block text-white mt-2" >Athart-rachel</h4>
                        <p>Gym Trainer</p>
                    </div>
                </div>
            </div>
            <div class="team py-3" data-aos="fade-left">
                <div class="team-img py-1">
                <img src= {Team4} alt="" />
                    <div class="team-content text-center">
                        <h4 class="d-block text-white mt-2" >Athart-rachel</h4>
                        <p>Gym Trainer</p>
                    </div>
                </div>
            </div>
    
        </div>
    
    </section>
 
  )
}

export default Team