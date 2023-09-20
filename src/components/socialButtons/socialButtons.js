import React from "react";
import { Menu } from "../menu";
export function SocialButtons(){
    return(
        <>
        <Menu/>
        <div className="socialBackground">
            <div className="socialContent py-1">
            <div className="buttonTitle"><h1 className="text-light title">Social Buttons</h1></div>
            <div className="buttonCollection py-1 d-flex">
            <button className="btn btn-warning m-1">Like</button>
            <button className="btn btn-light m-1">Comment</button>
            <button className="btn btn-primary m-1">Share</button>
            </div>
            </div>
       
        </div>
        </>
    );
}