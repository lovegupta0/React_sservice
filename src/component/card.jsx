import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";


function card({img,url}){
    return(
        <Card style={{ width: '10rem' }} className="card_height mt-5px mb-5px">
            <a href={url}>
            <Card.Img variant="top" className="card_height img" src={img} />
            </a>
            
        </Card>
    );
}

export default card;