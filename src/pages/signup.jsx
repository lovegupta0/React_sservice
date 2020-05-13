import React from "react";
import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Login from "../component/login";
import CreateProfile from "../component/createprofile";
import {Route,Switch} from "react-router-dom";
import Plan from "../component/plan";
import Footer from "../component/footer";
import Payment from "../component/payment";
import Interest from "../component/interest";


function Signup(props){
   
    return(
        <div>
            <Navbar herf="/">
                <Login />
            </Navbar>
            <Jumbotron>
                <Switch>
                <Route exact path="/signup">
                <CreateProfile />
                </Route>
                <Route exact path="/signup/plan">
                    <Plan />
                </Route>
                <Route exact path="/signup/plan/payment">
                    <Payment />
                </Route>
                <Route exact path="/signup/plan/interest">
                    <Interest />
                </Route>
                <Route path="/signup/plan/payment/interest">
                    <Interest />
                </Route>
                </Switch>
                <Footer/>
            </Jumbotron>
        </div>
    );
}

export default Signup;