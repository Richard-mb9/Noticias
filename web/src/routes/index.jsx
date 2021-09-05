import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Login from '../pages/login';
import News from '../pages/news';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = { News }  path="/" exact />
            <Route component = { Login }  path="/login" />
        </BrowserRouter>
    )
 }
 