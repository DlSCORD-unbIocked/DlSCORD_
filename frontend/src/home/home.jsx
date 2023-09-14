import {useEffect, useState} from "react";
import {getGuilds, getDMs, logOut} from "../components/lib";


const Home = () => {
    let [guilds, setGuilds]  = useState([]);
    let [dms, setDMs]  = useState([]);
    // calls functions below after component mounts
    useEffect(() => {
        (async () => { 
            setGuilds(await getGuilds()) 
            setDMs(await getDMs())
        })();
    }, []);


    // generate lists of rendered components containing usernames
    let dms_rendered = Array.from(dms).map((dm) =>  { return ( 
        <button className="serverButton">{dm.recipients.map(user => user.username)}</button>
    ) })
    let guilds_rendered = Array.from(guilds).map((guild) =>  { return ( 
        <button className="serverButton">{guild.name}</button>
    ) })

    const button_click_1 = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="sideNav">
            <button onClick={logOut} className="opts">Log Out</button>
            <button onClick={button_click_1}>Servers</button>
            <button onClick={getDMs}>opts</button>
            <div style={{border: "1px solid black"}}>
                {guilds_rendered}
            </div>
            <div style={{border: "1px solid black"}}> 
                {dms_rendered}
            </div>
        </div>
    ) 


}

export default Home;