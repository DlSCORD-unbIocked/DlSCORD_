import React, { useState } from 'react'
import './smartscholars.scss'
import {useNavigate} from "react-router-dom";
import SSNavBar from "../components/ssNavBar";
function SmartScholars() {
    return (
        <>
            <SSNavBar />
            <div className={"background-container"}></div>
            <h1 className={"smartScholars"}>WELCOME TO SMARTSCHOLARS</h1>
        </>
    );
}

export default SmartScholars;