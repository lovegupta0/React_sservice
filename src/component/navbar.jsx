import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  "./style.css"

function Navbars(props){


  return(

<Navbar bg="light" expand="sm">
  <Navbar.Brand href={props.herf} className="h">Streaming Service</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
  
    </Nav>
    {props.children}
   
  </Navbar.Collapse>
</Navbar>



  );
}

export default Navbars;
