import React from "react";
import Carousel from 'react-bootstrap/Carousel'



function Caro(props){
    return(
        <div>
            <Carousel>
                <Carousel.Item className={props.height} keys="1">
                    <img
                    className="d-block w-100"
                    src={props.img1}
                    alt="First slide"
                    className={props.height}
                    />
                    <Carousel.Caption>
                    <h3>{props.name1}</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={props.height}  keys="2">
                    <img
                    className="d-block w-100"
                    src={props.img2}
                    alt="2nd slide"

                    className={props.height}
                    />

                    <Carousel.Caption>
                    <h3>{props.name2}</h3>
                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={props.height}  keys="3">
                    <img
                    className="d-block w-100"
                    src={props.img3}
                    alt="Third slide"
                    className={props.height}
                    />

                    <Carousel.Caption>
                    <h3>{props.name3}</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}



export default Caro;