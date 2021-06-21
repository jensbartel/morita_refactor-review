import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import "./App.css";
import EarlyAccess from "./components/vipPage/EarlyAccess";
import EarlyAccess2 from "./components/vipPage/EarlyAccess2";
import EarlyAccessJP from "./components/vipPage/EarlyAccessJP";
import EarlyAccess2JP from "./components/vipPage/EarlyAccess2JP";
import Morita from "./components/exhibitionMainPage/Morita";
import MoritaJP from "./components/exhibitionMainPageJP/MoritaJP";


class App extends Component {
    render() {
        return (
                <Router>
                    <div className="App">
                        <Route exact path="/" component={MoritaJP} />
                        <Route exact path="/english" component={Morita} />
                        <Route exact path="/english/vip" component={EarlyAccess} /> 
                        <Route exact path="/english/vip2" component={EarlyAccess2} /> 
                        <Route exact path="/vip" component={EarlyAccessJP} /> 
                        <Route exact path="/vip2" component={EarlyAccess2JP} /> 
                    </div>
                </Router>                
        );
    }
}

export default App;
