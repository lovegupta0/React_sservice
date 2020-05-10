import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";

function Logout(){
    let history=useHistory();
    function handleClick(){
        const logoutData={
            logout:true
        }
        axios.post("/api/logout",logoutData,{crossDomain: true})
          .then(function (response) {
            if(response.data==="sucessful"){
                history.push("/");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    return(
        <Button variant="outline-primary" onClick={handleClick}>Logout</Button>
    )

}

export default Logout;