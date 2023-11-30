import React from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "../home/Home";
import About from '../pages/About';
import Classes from '../pages/Classes';
import OurTeam from '../pages/OurTeam';
import Contact from '../pages/Contact';
import Logo from "../assets/img/logo.png";
import Price from '../pages/price';

const Bar = () => {
  return (
    <BrowserRouter>
    <>
<Navbar expand="lg" className="bg-dark text-white sticky-top">
      <Container>
        <Navbar.Brand href="#" className='text-white'>  <img src= {Logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white '  as={Link} to='/' >Home</Nav.Link>
            <Nav.Link  className='text-white' as={Link} to='/about' >about</Nav.Link>
            <Nav.Link  className='text-white' as={Link} to='/class' > Classes</Nav.Link>
            <Nav.Link className='text-white'  as={Link} to='/team' > OurTeam</Nav.Link>
            <Nav.Link className='text-white'  as={Link} to='/pricing' > Pricing </Nav.Link>
            <Nav.Link  className='text-white' as={Link} to='/contact'>Contact</Nav.Link>



          </Nav>
        <Form class="d-flex mr-5 social">
     <div className='social' >
     <i class="fa-solid fa-magnifying-glass text-white mx-2"></i>
        <i class="fa-brands fa-facebook text-white mx-2"></i>
        <i class="fa-brands fa-twitter text-white mx-2"></i>
        <i class="fa-brands fa-youtube text-white mx-2 "></i>
     </div>
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>

    <div>
        <Routes> 

            <Route  path='/'  element={<Home/>} />
            <Route  path='/about'  element={<About/>} />
            <Route  path='/class'  element={<Classes/>} />
            <Route  path='/team'  element={<OurTeam/>} />
            <Route  path='/pricing'  element={<Price/>} />
            <Route  path='/contact'  element={ <Contact/>} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Bar;