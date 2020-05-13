import React from "react";
import {Button,Form} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";

const DataUpload=({setStatus})=>{
    let history=useHistory();
    const [img,setFile]=React.useState("");
    const [media,setMedia]=React.useState({
        filename:"",
        media:"",
        premium:"",
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
        setMedia( prevValue=>{
             return{
                 ...prevValue,
                [name]:value
            }
        });
    }

    const handle=(event)=>{
        setFile(event.target.files[0]); 
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("img",img);
        axios.post("/api/upload",formData,{crossDomin:true},{
            headers:{
                "Content-Type":"multipart/form-data"
            }
                })
        .then((res)=>{
            if(res.status===200){
                axios.post("/api/upload",media,{crossDomin:true});
                setStatus(false);
                
            }
            
        })
        history.push("/admin");
       

    }
    return(
        
        <Form onSubmit={handleSubmit} >
             <Form.Group controlId="filename">
                <Form.Label className="mt-7 mr">Filename: </Form.Label>
                <Form.Control type="text" className="mt-7" name="filename" onChange={handleChange} placeholder="File Name" required />     
            </Form.Group>
            <Form.Group controlId="file" style={{display:"flex"}}>
                <Form.Label className="mt-7 mr">Choose file image to upload: </Form.Label>
                <Form.Control type="file" onChange={handle} name="img" className="mt-7" required />        
            </Form.Group>
            <Form.Group controlId="filelink">
                <Form.Label className="mt-7 mr">Paste Media file url: </Form.Label>
                <Form.Control type="text" className="mt-7" onChange={handleChange} name="media" placeholder="Media file url:" required/>     
            </Form.Group>
            <Form.Group>
            <label  className="mb-3 mr-5">Premium Contain:</label>
            <select name="premium_contain" onChange={handleChange} id="" className="form-control mb-3 w-25">
                <option value="none" className="form-control ">Select</option>
                <option value="Yes" className="form-control">Yes</option>
                <option  value="No" className="form-control">No</option>
            </select>
            </Form.Group>
            <h5>Media File Category</h5>
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
            
            <div className="center mt mb-3 ">
                
                <Button variant="outline-primary" type="submit">Submit</Button>
              
            </div>
        </Form>
        
    )
}

export default DataUpload;