import React from "react";
import './ssNavBar.scss'
function SSNavBar() {
        const smartscholars = async(e) =>{
          e.preventDefault()
        window.open("./", "_self")
      }
      const signin = async(e) =>{
          e.preventDefault()
        window.open("login", "_self")
      }
      const pricing = async(e) =>{
          e.preventDefault()
        window.open("pricing", "_self")
      }
      const resources = async(e) =>{
          e.preventDefault()
        window.open("resources", "_self")
      }
      const aboutus = async(e) =>{
          e.preventDefault()
        window.open("aboutus", "_self")
      }
    return (
        <div className={"nav"}>
          <button className={"navButtons"} onClick={smartscholars}>Home</button>
          <button className={"navButtons"} onClick={pricing}>Pricing</button>
          <button className={"navButtons"} onClick={resources}>Resources</button>
          <button className={"navButtons"} onClick={aboutus}>About Us</button>
          <button className={"navButtons"} id={"signin"} onClick={signin}>Sign In</button>
        </div>
    );
}
export default SSNavBar;