import React from "react";

function Footer(){
    var d=new Date();
    var year=d.getFullYear();
    return(
        <div className="center">
            <hr/>
            <footer>&copy; Copyright {year} @StreamingService.com</footer>
        </div>
        
    );
}
export default Footer;