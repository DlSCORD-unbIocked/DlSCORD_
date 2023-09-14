import {useEffect, useState} from "react";
import {getGuilds, getDMs, logOut, getMessages} from "../components/lib";
import Messages from '../components/Messages'
import './home.scss';

const Home = () => {
    let [guilds, setGuilds]  = useState([]);
    let [dms, setDMs]  = useState([]);
    let [messages_id, set_messages_id] = useState("")
    // calls functions below after component mounts
    useEffect(() => {
        getGuilds().then(guilds_tmp => { setGuilds(guilds_tmp) })
        getDMs().then(dms_tmp => { setDMs(dms_tmp) })
    }, []);


    // generate lists of rendered components containing usernames
    let dms_rendered = Array.from(dms).map((dm) =>  { return (
        <button onClick={() => {set_messages_id(dm.id)}} className="dmButton">{dm.recipients.map(user => user.username)}</button>
    ) })
    let guilds_rendered = Array.from(guilds).map((guild) =>  { return ( 
        <button onClick={() => {set_messages_id(guild.id)}} className="serverButton">{guild.name}</button>
    ) })

    const button_click_1 = async (e) => {
        e.preventDefault();
        getMessages("797944346313752647").then(data => {
            console.log(data)
        })
    }

    return (
        <>
        <div className="Navbar">
            <h1 className={"header-1"}>ALT DISCORD</h1>
            <button onClick={logOut} className="opts">Log Out</button>
            <button onClick={button_click_1}>Servers</button>
            <button onClick={getDMs}>opts</button>
        </div>
        <div className="serverButtons">
            {guilds_rendered}
        </div>
        <div style={{border: "1px solid black"}}>
           {dms_rendered}
        </div>

        <Messages id={messages_id}/>
        </>
    ) 


}

export default Home;