import React from "react";
import Card from 'react-bootstrap/Card';
import {Form} from "react-bootstrap";


const CaroUpdate=({img,_id,handle,value,name})=>{
    
    return(
        <Card style={{ width: '10rem' }} className="mt-5px mb-5px" >
        <Card.Img variant="top" className="card_height img" src={img} value={value}  key={_id} />
        <Card.Body>
            <div className="text-center"><Form.Check type="checkbox" label={name} name={name} onChange={handle} value={_id}/></div>
       
 
        </Card.Body>
        
    </Card>
    )
}



export default CaroUpdate;