import React from "react";
import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Navbar from "../component/navbar";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Caro from '../component/carousel';
import Login from "../component/login";

function Index(props){


    return(
        <div>
            <Navbar>
                <Login  />
            </Navbar>
            <div>
            <Jumbotron className="mb-0">
             <h1 className="center h">Streaming Service</h1>
            <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            </p>
            <p className="center">
                <Link to="/signup">
            <Button variant="outline-primary" >signup</Button>
            </Link>
        </p>
        
        </Jumbotron>
        <Caro img1="img1.jpg" img2="img2.jpg" img3='img3.jpg' height="height-600px" />
        
            </div>
        </div>

    );
}

export default Index;