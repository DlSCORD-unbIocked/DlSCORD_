import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import './login.scss';
import {Link} from "react-router-dom";
import SSNavBar from "../components/ssNavBar";

function Login() {
    const [token, setToken] = useState("");
    const handleTokenChange = (event) => {
        setToken(event.target.value);
    };
  const login = async (e) => {
      e.preventDefault()
      document.cookie = "token="+token
      window.open("home", "_self");
  };

    const saveToken = async(e) =>  {
        e.preventDefault()
        window.localStorage.setItem("token", token);
        alert("Token Saved")
    }
  const loadToken = async(e) =>  {
      e.preventDefault()
      setToken(window.localStorage.getItem("token"))
    }

  return (
      <>
      <SSNavBar />
      <div id={"login-form"}>
          <h1>Login</h1>
          <input onChange={handleTokenChange}  value={token} id="tokenPaste" type="text" placeholder="Discord Token" />
          <div>
              <button type="submit" id="submitToken" onClick={login}>Login</button>
              <button type="submit" onClick={saveToken}>Save Token</button>
              <button type="submit" onClick={loadToken}>Load Token</button>
          </div>
          <a href = "https://www.youtube.com/watch?v=YEgFvgg7ZPI" target="_blank">Where is my discord token?</a>
      </div>
    </>
  );
}

export default Login;
// "NTg2MTU1ODUzMTU4Mjg1MzIx.GMXELS.faHuJ74NJzCXmDTS9lXcOJsXD4yu4mj39lyHrw"