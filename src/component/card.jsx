import React from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";


function card({img,_id}){
    return(
        <Card style={{ width: '14rem' }} className="card_height" key={_id}>
            <Card.Img variant="top" className="card_height" src={img} />
            
        </Card>
    );
}

export default card;