import React from "react";
import {Button,Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setSignupData} from "../redux/signup_redux/signup_action";
import axios from "axios";

function Interest({setSignupData,profileData}){

    let history=useHistory();

    const [interest,setInterest]=React.useState({
        action:"",
        comedies:"",
        romantic:"",
        adventure:"",
        musicals:"",
        dramas:"",
        documentry:"",
        scifi:""
    })

    function handleChange(event){
        var {name,value}=event.target;
        setInterest( prevValue=>{
             return{
                 ...prevValue,
                [name]:value
            }
        });
    }

   async function handleSubmit(event){
        event.preventDefault();
       var arr=profileData;
       arr[3]=interest;
       setSignupData(arr);
       
        axios.post("/signup",arr,{crossDomain: true})
          .then(function (response) {
            if(response.data==="sucess"){
                history.push("/success");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        
       
    }

    return(
        <Form onSubmit={handleSubmit}>
            <h5>Choose According to your interest</h5>
            <Form.Group controlId="action">
            <Form.Check type="checkbox" id="action" onChange={handleChange} name="action" label="Action" value="action" />
            </Form.Group>
            <Form.Group controlId="comedies">
            <Form.Check type="checkbox" label="Comedies" onChange={handleChange} name="comedies" value="comedies" />
            </Form.Group>
            <Form.Group controlId="romantic">
            <Form.Check type="checkbox" label="Romantic" onChange={handleChange} name="romantic" value="romantic" />
            </Form.Group>
            <Form.Group controlId="adventure">
            <Form.Check type="checkbox" label="Adventure" onChange={handleChange} name="adventure" value="adventure" />
            </Form.Group>
            <Form.Group controlId="musicals">
            <Form.Check type="checkbox" label="Musicals" onChange={handleChange} name="musicals" value="musicals" />
            </Form.Group>
            <Form.Group controlId="dramas">
            <Form.Check type="checkbox" label="Dramas" onChange={handleChange} name="dramas" value="dramas" />
            </Form.Group>
            <Form.Group controlId="documentry">
            <Form.Check type="checkbox" label="Documentry" onChange={handleChange} name="documentry" value="documentry" />
            </Form.Group>
            <Form.Group controlId="scifi">
            <Form.Check type="checkbox" label="Sci-fi" onChange={handleChange} name="scifi" value="scifi" />
            </Form.Group>
            <small >It is not mandatory</small>
            <div className="center mt">
                
                <Button variant="outline-primary" type="submit">Submit</Button>
              
            </div>
        </Form>
    )
}

const mapStateToProps=(state)=>({
    profileData:state.profileData.signupData
})


const mapDispatchToProps=dispatch=>({
    setSignupData:profileData=>dispatch(setSignupData(profileData))
});

export default connect(mapStateToProps,mapDispatchToProps)(Interest);