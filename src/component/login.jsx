import React,{useState} from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom"
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {setCurrentUser} from "../redux/user/user_action";
import {setUserData,setTitle} from "../redux/data_redux/data_action";

function Login({setCurrentUser,setUserData,setTitle}){
    let history=useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [status,setstatus]=useState("");
    
    const[login,setStateLogin]=React.useState({
        username:"",
        password:"",
        rememberMe:""
    })

    function handleChange(event){
        var {name,value}=event.target;
        setStateLogin(prevValue=>{
            return{
                ...prevValue,
                [name]:value
            }  
        });
    }

   

    function handleSubmit(event){
        
        axios.post("/login",login,{crossDomain: true})
          .then(function (response) {
            if(response.data.status==="sucess"){
                setCurrentUser(response.data);
                setstatus("");
                axios.get("/api/getData",{crossDomain:true})
                .then(function(response){
                    setTitle(response.data[0])
                    setUserData(response.data[1]);
                })
                .catch(function (error) {
                    console.log(error);
                });

                history.push("/home");

            }
            else if(response.data.status==="admin"){
                setCurrentUser(response.data);
                history.push("/admin");
            }
            else{
                setstatus("is-invalid");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        event.preventDefault();
        
    }

    return(
        <div>
             <Button variant="outline-primary" onClick={handleShow}>
      Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Streaming Service</Modal.Title>
        </Modal.Header>
        
        <Modal.Body className='center'>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-0 mt">
                    
                    <Form.Control type="email" className={status+" w-50"} name="username" onChange={handleChange} placeholder="Username" required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-0">
                    <Form.Control type="password" className={status+" w-50"} name="password" onChange={handleChange} placeholder="Password" required />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="mt-5px"  name="rememberMe" value="rememberMe">
                    <Form.Check type="checkbox" label="Remember Me" onChange={handleChange} name="rememberMe" value="rememberMe" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Login
                </Button>
            </Form>
                
        </Modal.Body>
        <Modal.Footer>
        <div >
                <small>&copy; Copyright Streaming Service</small>
               
              </div>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

const mapDispatchToprops=dispatch=>({
    setCurrentUser:user=>dispatch(setCurrentUser(user)),
    setUserData:userData=>dispatch(setUserData(userData)),
    setTitle:title=>dispatch(setTitle(title))
});

export default connect(
    null,
    mapDispatchToprops
)(Login);

