import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'

function Jumbotro(props){
    return(
        <div className="container">
            <Jumbotron className="padding-left">
                {props.children}
            </Jumbotron>

        </div>
    );
}

export default Jumbotro;