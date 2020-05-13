import React from "react";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import axios from "axios";
import NavBar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Profile from "../component/profile";
import Footer from "../component/footer";
import DataUpload from "../component/dataUpload";
import CaroUpdate from "../component/caroUpdate";
import { setCaroData } from "../redux/carosel/caro_action";
import {useHistory} from "react-router-dom";


const Admin=({allData})=>{
    let history=useHistory();
    const [status,setStatus]=React.useState(false);
    const [caro,setCaro]=React.useState([]);
    const handleClick=()=>(setStatus(!status));
    const [show,setShow]=React.useState(false);
    const handle=(e)=>{
        var value=e.target.value;
        setCaro([...caro,value]);
    }

   const handleShow=()=>(setShow(!show));

    const settingCaro=()=>{
        var arr=[];
        for(var i=0;i<3;i++){
            var found=allData.find(data=>data._id===caro[i]);
            arr.push(found);
        }
        axios.post("/api/setCaro",arr,{crossDomain:true}).then((res)=>(console.log(res.data)
        ));
        setCaro([]);
        axios.get("/api/getCaro",{crossDomain:true})
        .then((res)=>{
            setCaroData(res.data);  
        })
        history.push("/admin");
    }
   
    return(
        <div>
            <NavBar herf="/admin">
                <Profile />
            </NavBar>
            <Jumbotron>
                <Button variant="outline-primary" className="mb-3" onClick={handleClick}>Upload Media</Button>
                <Button variant="outline-primary" className="mb-3 ml-5" onClick={handleShow}>Update Carousel</Button>
               {status? <DataUpload setStatus={setStatus}/>:null}
               <div>
                {show?<div>
                    <h5 >Choose Media inorder to update Carousel</h5>
                    <hr className="mb-3" />
               <div className="row">
               {allData.map((data)=>(<CaroUpdate  key={data._id} _id={data._id} img={data.img} handle={handle} value={data} name={data.filename} />))}
               </div>
               <div className="text-center">
               <Button variant="outline-primary" style={{marginTop:"1rem"}} onClick={settingCaro} className="mb-3">Set Carousel</Button>
               </div>
               </div>:null}
               </div>

                <Footer/>
            </Jumbotron>
        </div>
    )
}

const mapStateToProps=state=>({
    allData:state.userData.data
})

export default connect(mapStateToProps)(Admin);