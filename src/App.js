import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import "./styles/English/App.css";
import "./styles/Japanese/AppJP.css";

import EarlyAccess from "./components/VIP/EarlyAccess";
import EarlyAccess2 from "./components/VIP/EarlyAccess2";
import EarlyAccessJP from "./components/VIP/EarlyAccessJP";
import EarlyAccess2JP from "./components/VIP/EarlyAccess2JP";
import Morita from "./components/English/Morita_English";
import MoritaJP from "./components/Japanese/Morita_Japanese";


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
