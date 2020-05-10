import React from "react";
import {Route} from "react-router-dom";
import Index from "./pages/Index.jsx";
import Signup from "./pages/signup";
import Congo from "./pages/congo";
import Home from "./pages/home";
function App(){
    
    return(
        
        <div>
                <Route exact path="/" component={Index} />
                <Route exact path="/signup"><Signup />
                </Route>
                <Route  path="/signup/plan" component={Signup} />
                <Route path="/success" component={Congo} />
                <Route path="/home" component={Home} />
                
        </div>
    );
};


export default App;