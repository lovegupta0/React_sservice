import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  "./style.css"

function Navbars(props){


  return(
<div>
<Navbar bg="light" expand="sm">
  <Navbar.Brand href="/" className="h">Streaming Service</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
  
    </Nav>
    {props.children}
   
  </Navbar.Collapse>
</Navbar>

</div>

  );
}

export default Navbars;
