import React from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Logout from "../component/logout";

function Home(){
    return(
        <div>
            <Navbar>
                <Logout/>
            </Navbar>
            <Jumbotron>

            </Jumbotron>
            
        </div>
    )
}

export default Home;