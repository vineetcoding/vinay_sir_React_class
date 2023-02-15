import React, { Component } from "react";

export default class YtNetflix extends Component{
    render(){
        return(
            <>
            <h1>Netflix</h1>
            <p>i am {10+10} year old</p>
                <ol>
                    <li>Movie One</li>
                    <li>Movie Two</li>
                    <li>Movie Three</li>
                    <li>Movie Four</li>
                    <li>Movie Five</li>
                </ol>
                <h1>My Name is Vineet</h1>
                <p>Today Date is {new Date().toLocaleDateString()}</p>
                <p>Current Time is {new Date().toLocaleTimeString()}</p>
            </>
        )
    }
}