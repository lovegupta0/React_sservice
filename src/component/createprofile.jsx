import React from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios"
import {setSignupData} from "../redux/signup_redux/signup_action";
import "./style.css";


const CreateProfile=({setSignupData})=>{
    let history=useHistory();
    const [validity,setValidity]=React.useState("");
    const [status,setstatus]=React.useState("");
    const [profile,setProfile]=React.useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        Cpassword:"",
        mobile:"",
        dob:""
        

    });
    
   function handleProfile(event){
        var {name,value}=event.target;
        
        setProfile( prevValue=>{
             return{
                 ...prevValue,
                [name]:value
            }
           
        }
        );

        if(name==="Cpassword"  || (name==="password" && profile.Cpassword) ){
            if(name==="Cpassword" && value===profile.password){
                setValidity("is-valid");
            }

            else if(name==="password" && profile.Cpassword===value){
                setValidity("is-valid");
            }
            else {
                setValidity("is-invalid");
            }
        }
 
    }

    function check_email(){
        axios.post("/api/check_email",{email:profile.email},{crossDomain: true})
        .then(function (response) {
          if(response.data==="not matched"){
              setstatus("is-valid");
          }
          else{
              setstatus("is-invalid");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function submitProfile(event){
        event.preventDefault();
        setSignupData(profile);
        if(status!=="is-invalid"){
            history.push("/signup/plan");
        }
            
     }
        
    return(
        <div>
        <h5 className="center mb">Fill This Form...</h5>
            
            <Form onSubmit={submitProfile}>
                
                    <Form.Group controlId="fname">
                            <Form.Label className="mt-7">First Name: </Form.Label>  
                            <Form.Control name="fname" className="box" onChange={handleProfile} type="text" placeholder="First name" required />
                    </Form.Group>
                    <Form.Group  controlId="lname">
                        <Form.Label className="mt-7">Last Name: </Form.Label>
                        <Form.Control name="lname" className="box" onChange={handleProfile} type="text" placeholder="Last name" required /> 
                    </Form.Group>
                    <Form.Group  controlId="email">
                        <Form.Label className="mt-7">Email: </Form.Label>
                        <Form.Control name="email" className={status +" box"} onChange={handleProfile} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group  controlId="password">
                        <Form.Label className="mt-7">Create Password: </Form.Label>
                        <Form.Control name="password" className={validity+" box"} onClick={check_email} onChange={handleProfile} type="password" placeholder="Create Password" required />
                    </Form.Group>
                    <Form.Group  controlId="Cpassword">
                        <Form.Label className="mt-7">Confirm Password: </Form.Label>
                        <Form.Control name="Cpassword" className={validity+" box"} onChange={handleProfile} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group  controlId="mobile">
                        <Form.Label className="mt-7">Mobile No: </Form.Label>
                        <Form.Control name="mobile" className="box" onChange={handleProfile} type="text" placeholder="Mobile No." required /> 
                    </Form.Group>
                    <Form.Group  controlId="dob">
                        <Form.Label className="mt-7">Date of Birth: </Form.Label>
                        <Form.Control name="dob" className="box" onChange={handleProfile} onClick={check_email} type="date" min="1950-01-01" max="2018-12-31" required /> 
                    </Form.Group>
                    <div className="center">
                        
                    <Button variant="outline-primary" type="submit"  >Next</Button>
                    
                    </div>
            </Form>
            </div>
    );
}

const mapDispatchToProps=dispatch=>({
    setSignupData:profileData=>dispatch(setSignupData(profileData))
});
export default connect(null,mapDispatchToProps)(CreateProfile);