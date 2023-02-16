import React, { Component } from "react";
import "./W3_Header.css";
// import { ReactDOM } from "react";

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="header_div">
                    
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png" alt="Logo"/>
                    
                    <p className="tutorial">Tutorial</p>
                    <p className="references">References</p>
                    <p className="exercises">Exercises</p>
                    <p className="sign_up">Sign Up</p>
                    <div className="header_mid_div">
                        <p>Icons</p>
                        <p>Icons</p>
                        <p>lense</p>
                    </div>
                    <p className="pro">Pro</p>
                    <p className="certified">Get Certified</p>
                    <p className="website">Create Website</p>
                    <p className="log_in">Log in</p>
                </div>
            </>
        )
    }
}