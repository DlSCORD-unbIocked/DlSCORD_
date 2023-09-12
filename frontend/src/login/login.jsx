import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import './login.scss';
function Login() {
    const [token, setToken] = useState("");
  const login = async (e) => {
      // e.preventDefault()
      // Cookies.set("token", token)
      // console.log("logging in")
      window.open("messages", "_self");

  };

  return (
      <div>
          <h1>lolol</h1>
            <input onChange={setToken}  value={token} id="tokenPaste" type="text" placeholder="put token heree" />
            <button type="submit" id="submitToken" onClick={login}>submit</button>
      </div>
  );
}

export default Login;
