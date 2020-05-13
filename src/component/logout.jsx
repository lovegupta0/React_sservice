import React from "react";
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
        <h6 onClick={handleClick}>Logout</h6>
    )

}

export default Logout;