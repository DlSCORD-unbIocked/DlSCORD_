import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import './login.scss';
import {Link} from "react-router-dom";

function Login() {
    const [token, setToken] = useState("");
    const handleTokenChange = (event) => {
        setToken(event.target.value);
    };
  const login = async (e) => {
      e.preventDefault()
      document.cookie = "token="+token
      window.open("messages", "_self");
  };

  return (
      <div>
          <h1>aklsdfl;asjdflol</h1>
            <input onChange={handleTokenChange}  value={token.value} id="tokenPaste" type="text" placeholder="put token heree" />
            <button type="submit" id="submitToken" onClick={login}>submit</button>
            {/*<Link to={"/messages"} onClick={login()}>Submit</Link>*/}
      </div>
  );
}

export default Login;
// "NTg2MTU1ODUzMTU4Mjg1MzIx.GMXELS.faHuJ74NJzCXmDTS9lXcOJsXD4yu4mj39lyHrw"