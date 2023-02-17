import React, { Component } from "react";
import Logincomp from "./Components/Logincomp";
import RefSection from "./Components/RefSection.js/RefSection";
import Use_Map from "./Components/Use-of-Map/1Use_Map";
import Header from "./Components/W3_Header";
import YtNetflix from "./Components/Yt_Self_Std";

export default class App extends Component {
    render() {
        return(
            <>
            <Header></Header>
            <Logincomp/>
            <YtNetflix/>
            <RefSection/>
            <Use_Map/>
            </>
        )
    }
}

// export default App;