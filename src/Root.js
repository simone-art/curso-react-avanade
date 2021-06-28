/* eslint-disable no-unused-vars */
import React from "react";
import {
    BrowserRouter,
    Switch, 
    Route
} from "react-router-dom";

//Este arquivo root foi feito pra enrutar as nossas pages 

import Home from './pages/Home';
import About from './pages/About';

const Root = () => {
 return(
     <BrowserRouter>
     <Switch>
         <Route exact path = "/"  component={Home}/>
         <Route exact path = "/about"  component={About}/>
     </Switch>
     </BrowserRouter>
    ) 
}

export default Root;