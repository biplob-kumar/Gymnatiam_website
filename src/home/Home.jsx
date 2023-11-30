import React from 'react'
import "./../style/home.css";
import { Link } from 'react-router-dom';
import HomeLink from './homeLink';

const subTitle = "SHAPE YOUR BODY";
const title = "Be  traning hard";
const stront='Strong'
const btnText = "Get info";
const Home = () => {
  return (
    // <!--  hero-section start -->
<section class="hero-section" >
    <div class="container hero-wraper">
        <h1></h1>
        <div class="hero-content" data-aos="zoom-in">
         <h5>SHAPE YOUR BODY</h5>
         <h1>Be <strong>strong</strong> traning hard</h1>
         <a href="#" class="primary-btn">Get info</a>
        </div>
   
    </div>
    <HomeLink/>
</section>
    // <!--  hero-section end  -->
  )
}

export default Home