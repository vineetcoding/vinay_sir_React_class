import React, { Component } from "react";
import Logincomp from "./Components/Logincomp";
import Header from "./Components/W3_Header";
import YtNetflix from "./Components/Yt_Self_Std";

export default class App extends Component {
    render() {
        return(
            <>
            <Header/>
            <Logincomp/>
            <YtNetflix/>
            </>
        )
    }
}

// export default App;