import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login/login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/home";
import SmartScholars from "./smartscholars/smartscholars";
import './index.scss'
import Pricing from "./pricing/pricing";
import Resources from "./resources/resources";
import AboutUs from "./aboutus/aboutus";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<SmartScholars />} />
              <Route path={"/pricing"} element={<Pricing />} />
              <Route path={"/resources"} element={<Resources />} />
              <Route path={"/aboutus"} element={<AboutUs />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/home"} element={<Home />} />
          </Routes>
      </BrowserRouter>

//   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
