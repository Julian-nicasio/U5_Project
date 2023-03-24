import React, {Component} from  "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
        } from "react-router-dom";
        import Home from "./Home";
        import Benefits from "./Benefits";
        import Repair from "./Repair";
        import FAQ from "./FAQ";
class Main extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>CIS453L PROJECT</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>                       
                        <li><NavLink to="/Benefits">Benefits </NavLink></li>
                        <li><NavLink to="/Repair">Repair </NavLink></li>
                        <li><NavLink to="/FAQ">FAQ </NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/"element={<Home />}/>                        
                        <Route path="/Benefits"element={<Benefits/>}/>
                        <Route path="/Repair"element={<Repair/>}/>
                        <Route path="/FAQ"element={<FAQ/>}/>
                    </Routes> 
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;