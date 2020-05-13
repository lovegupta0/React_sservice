import React from "react";
import {connect} from "react-redux";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Profile from "../component/profile";
import Card from "../component/card";
import Search from "../component/search";
import Footer from "../component/footer";
import Caro from "../component/carousel";

import "./style.css";

function Home({allData,userData,title,caroData}){
    var x=-1;
    var a=0
    var lastScrollY;
    var scrollable;
    const [act,setAct]=React.useState();
    const [arr,setArr]=React.useState([]);
    const [search,setSearch]=React.useState("");
    const handleChange=(event)=>{
        setSearch(event.target.value);
    }


    function setting(val,arr){
        var y=[];
        if(val<=allData.length){
        for(var i=0;i<val;i++){
            y[i]=arr[i];
        }
        }
        if(act!==allData.length){
            setArr(y);
        }
        
    }

    window.addEventListener("scroll",()=>{
       lastScrollY = window.scrollY;
       scrollable=document.documentElement.scrollHeight -window.innerHeight;
      if(Math.ceil(lastScrollY)===scrollable){
          if(a<allData.length){
              a=a+6;
          }
          else if(act){
              return;
          }
          else{
              a=allData.length;
              setAct(a);
          }
         setting(a,allData);
        
      }

      
    })

    function count(){
        x=x+1
        return(x);
    }
    console.log(caroData);
    
    var filterData=allData.filter(data=>data.filename.toLowerCase().includes(search.toLowerCase()));

    return(
        <div >
            <Navbar herf="/home">
                <div style={{display:"flex"}}>
                <Search handleChange={handleChange}/>
                <Profile/>
                </div>
            </Navbar>
            <Caro 
                img1={caroData[0].img} 
                img2={caroData[1].img} 
                img3={caroData[2].img}
                name1={caroData[0].filename}
                name2={caroData[1].filename}
                name3={caroData[2].filename}
                height="height-600px" />
            <Jumbotron>
                <div>
                    <h5 className="mb-0">Movie</h5>
                    {search? <div className="row">
                        {filterData.map((data)=>(<Card key={data._id} _id={data._id} img={data.img} url={data.media_url} />))}

                    </div>
                    :userData.map((userData)=>{
                        
                        return(
                            <div key={userData[0]._id} className="hr">
                                <hr/>
                            <h6 className="mb-0" style={{marginTop:"1rem"}}>{title[count()]}</h6>
                                    
                                <hr/>
                            <div className="row" style={{marginBottom:"0"}} >
                                
                                {userData.map(function(data){
                                    return(
                                        <Card key={data._id} _id={data._id} img={data.img} url={data.media_url} />
                                    )
                                })}
                            </div>
                            </div>
                        )
                    })}
                    {arr && !search?<div>
                        <hr></hr>
                        <h5 className="mb-0" style={{marginTop:"1rem"}}>Latest Movies</h5>
                        <hr/>
                    <div className="row">
                    {arr.map((data)=>(<Card key={data._id} _id={data._id} img={data.img} url={data.media_url} />))}
                    </div>
                    </div>
                    :null}
                
                </div>
                <Footer />
            </Jumbotron>
            
        </div>
    )
}

const mapToStateProps=state=>({
    allData:state.userData.data,
    userData:state.userData.userData,
    title:state.userData.title,
    caroData:state.caroData.caroData
})

export default connect(mapToStateProps)(Home);