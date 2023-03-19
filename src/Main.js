import React, {Component} from  "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
        } from "react-router-dom";
        import Home from "./Home";
        import Led from "./Led";

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Creating and Adding Custom Components to React</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Led">Led </NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/"element={<Home />}/>
                        <Route path="/Led"element={<Led/>}/>
                    </Routes> 
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;