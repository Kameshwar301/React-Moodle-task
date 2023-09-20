import React from "react";
import { Menu } from "../menu";
function SuperOver(){
    return(
    <>
    <Menu/>
        <div className="outterDivision bg-dark py-5 ">
            <h1 className="text-light text-center">Super Over League</h1>
            <div className="row g-0 py-5">
            
            <div className="col-12 col-md-6 superRCB"><img src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" className="rcb img-fluid"/></div>
            <div className="col-12 col-md-6 superCSK"><img src="https://assets.ccbp.in/frontend/react-js/csk-img.png" className="csk img-fluid"/></div>
              
            </div>
           
        </div>
        </>
    );
}
export default SuperOver;