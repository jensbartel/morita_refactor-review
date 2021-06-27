import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import "./styles/App.css";
import "./styles/AppJP.css";

import Vip from "./components/VIP/Vip";
import Vip2 from "./components/VIP/Vip2";
import VipJP from "./components/VIP/VipJP";
import Vip2JP from "./components/VIP/Vip2JP";
import Morita from "./components/English/Morita_English";
import MoritaJP from "./components/Japanese/Morita_Japanese";


class App extends Component {
    render() {
        return (
                <Router>
                    <div className="App">
                        <Route exact path="/" component={MoritaJP} />
                        <Route exact path="/vip" component={VipJP} /> 
                        <Route exact path="/vip2" component={Vip2JP} /> 
                        <Route exact path="/english" component={Morita} />
                        <Route exact path="/english/vip" component={Vip} /> 
                        <Route exact path="/english/vip2" component={Vip2} /> 
                    </div>
                </Router>                
        );
    }
}

export default App;
