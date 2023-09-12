import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import './login.css';
function Login() {
    const [formData, setFormData] = useState({
    tokenPaste: "",
    token: ""
  })
  const login = () => {
      let token = formData.tokenPaste
      Cookies.set("token", token)
      document.getElementsByName("token")[0].value = token
  };

  return (
      <div>
          <h1>lolol</h1>
            <form onSubmit={login()}>
                <input onChange={(e) => setFormData({...formData, tokenPaste  : e.target.value})}  value={formData.tokenPaste} id="tokenPaste" type="text" placeholder="put token heree" />
                <button type="submit" id="submitToken">submit</button>
                <input onChange={(e) => setFormData({...formData, token  : e.target.value})}  value={formData.token} id="token" type="hidden"/>
            </form>
      </div>
  );
}

export default Login;
