import React from "react";
import Jumbotron from "../component/jumbotron";
import Navbar from "../component/navbar";
import Login from "../component/login";
import Footer from "../component/footer";

function Congo(props){
    return(
        <div>
            <Navbar>
                <Login />
            </Navbar>
            <Jumbotron>
                <div className="center">
            <h1 className="display-4 text-success ">Congratulaion !!!!!</h1>
            <p className="mb-0">Your Form has submitted....</p>
            <p className="mt-0">Check your email....... </p>
            </div>
            <Footer/>
            </Jumbotron>
        </div>
    );
}
export default Congo;