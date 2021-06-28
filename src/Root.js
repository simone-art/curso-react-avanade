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
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Root = () => {
 return(
     <BrowserRouter>
     <Switch>
         <Route exact path = "/"  component={Home}/>
         <Route exact path = "/about"  component={About}/>
         <Redirect to= "/about" />
     </Switch>
     </BrowserRouter>
    ) 
}

export default Root;