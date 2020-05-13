import React from "react";
import {Button} from 'react-bootstrap';
import {Link,useHistory} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import Navbar from "../component/navbar";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Caro from '../component/carousel';
import Login from "../component/login";
import {setData,setUserData,setTitle} from "../redux/data_redux/data_action";
import {setCurrentUser} from "../redux/user/user_action";
import Footer from "../component/footer";
import {setCaroData} from "../redux/carosel/caro_action";



function Index({setData,setCurrentUser,setTitle,setUserData,setCaroData}){

    let history=useHistory();
    axios.get("/api/getAllData",{crossDomain:true})
        .then(function(response){
             setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    axios.get("/api/getCaro",{crossDomain:true})
    .then((res)=>{
        setCaroData(res.data);
    })

    axios.get("/api/getData",{crossDomain:true})
    .then((res)=>{
        console.log(res.data);
        if(res.data[2].status==="sucess"){
            setTitle(res.data[0]);
            setUserData(res.data[1]);
            setCurrentUser(res.data[2]);
            
            
            history.push("/home");
        }
        else if(res.data.status==="admin"){
            setCurrentUser(res.data[2]);
            history.push("/admin");
        }
    })
    .catch(function (error) {
        console.log(error);
    });

    return(
        <div>
            <Navbar herf="/">
                <Login  />
            </Navbar>
            <div>
            <Caro img1="img1.jpg" img2="img2.jpg" img3='img3.jpg' height="height-600px" />
            <Jumbotron className="mb-0  container" style={{height:"18rem"}}>
                <div className="position">
             <h1 className="center h" >Streaming Service</h1>
            <p className="text-position mt mb-3" >
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            </p>
            <p className="center mt">
                <Link to="/signup">
            <Button variant="outline-primary" >signup</Button>
            </Link>
        </p>
        </div>
        
        </Jumbotron>
        <Jumbotron>
            <Footer/>
        </Jumbotron>
       
        
            </div>
        </div>

    );
}

const mapToDispatchProps=dispatch=>({
    setData:data=>dispatch(setData(data)),
    setUserData:userData=>dispatch(setUserData(userData)),
    setTitle:title=>dispatch(setTitle(title)),
    setCurrentUser:user=>dispatch(setCurrentUser(user)),
    setCaroData:caroData=>dispatch(setCaroData(caroData))
    
});

export default connect(null,mapToDispatchProps)(Index);