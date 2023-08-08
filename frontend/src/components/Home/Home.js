import React from "react";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Routeselector from "./SelectRoute";
function Home() {
    return (
        <div className="home">
            {/* <h1>Welcome</h1> */}
            
            <Routeselector/>
        </div>


     );
}

export default Home;
