import React, { Component } from "react";

export default class App extends Component {
    // constructor() {
    //     super()
    //         this.state = {
    //             email: "abc@gmail.com",
    //             number: "123"
    //         }
        
    // }
    getEmail=(e)=>{
        e.preventDefault()
        let email_input = document.querySelector('.email');
        console.log(email_input.value);
        let result_div = document.querySelector('.result');
        result_div.innerHTML = `Hello, ${email_input.value}`;

        document.querySelector('.form').style.display = "none";
    }
    
    render() {
        return(
            <>
            <h1>Form</h1>
            <form className="form">
                <label for="email">Email:</label>
                <input className="email" type="email" name="email" placeholder="enter your email..."/><br></br>

                <label for="password">Password:</label>
                <input className="password" type="password" name="password" placeholder="enter your number..."/><br></br>
                <button onClick={this.getEmail}>sign in</button><br></br>
            </form>
                <h2 className="result"></h2>
            </>
        )
    }
}

// export default App;