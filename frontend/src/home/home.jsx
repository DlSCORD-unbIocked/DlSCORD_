import {useEffect, useState} from "react";
import {getGuilds, getDMs, logOut} from "../components/lib";
import Messages from '../components/Messages'
import './home.scss';

const Home = () => {
    let [guilds, setGuilds]  = useState([]);
    let [dms, setDMs]  = useState([]);
    let [messages_id, set_messages_id] = useState("")
    let [channelName, setChannelName] = useState("")

   let [channelDisplayMode, setChannelDisplayMode]  = useState("none")

    // calls functions below after component mounts
    useEffect(() => {
        getGuilds().then(guilds_tmp => { setGuilds(guilds_tmp) })
        getDMs().then(dms_tmp => { setDMs(dms_tmp) })
    }, []);


    // generate lists of rendered components containing usernames
    let dms_rendered = Array.from(dms).map((dm, index) =>  { return (
        <button onClick={() => {set_messages_id(dm.id); setChannelName(dm.recipients.map(user => user.username).join(", "))}} key={index} className="channel-container">{dm.recipients.map(user => user.username).join(", ")}</button>
    ) })
    let guilds_rendered = Array.from(guilds).map((guild, index) =>  { return (
        <button onClick={() => {set_messages_id(guild.id); setChannelName(guild.name)}} key={index} className="channel-container">{guild.name}</button>
    ) })

    const updateChannelDisplayMode = (mode) => {
        if (channelDisplayMode === mode) {
            setChannelDisplayMode("none")
        } else {
            setChannelDisplayMode(mode)
        }
    }

    return (
        <>
        <div className="Navbar">
            <div>
                <button className={"b1"} onClick={logOut}>Log Out</button>
                <button className={"b1"} onClick={() => updateChannelDisplayMode("server")}>Servers</button>
                <button className={"b1"} onClick={() => updateChannelDisplayMode("dms")}>opts</button>
            </div>
            <div>
                <h1 className={"header-1"}>ALT DISCORD</h1>
            </div>
        </div>
        <div id={"body"}>
            {channelDisplayMode === "server" && <div className={"channel-list"}>{guilds_rendered}</div>}
            {channelDisplayMode === "dms" && <div className={"channel-list"}>{dms_rendered}</div>}

            <Messages id={messages_id} name={channelName}/>
        </div>
        </>
    )


}

export default Home;