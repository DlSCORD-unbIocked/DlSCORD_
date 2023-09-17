import React, { useState } from 'react'
import './smartscholars.scss'
import {useNavigate} from "react-router-dom";
import SSNavBar from "../components/ssNavBar";
function SmartScholars() {
    return (
        <div>
            <SSNavBar />
            <h1 className={"smartScholars"}>WELCOME TO SMARTSCHOLARS</h1>
        </div>
    );
}

export default SmartScholars;