import {useEffect, useState} from "react";
import {getGuilds, getDMs, logOut, getChannels} from "../components/lib";
import Messages from '../components/Messages'
import './home.scss';

const Home = () => {
    let [guilds, setGuilds]  = useState([]); // list of guilds user is member of
    let [guildChannels, setGuildChannels] = useState([]); // dynamically set to be list of channels from selected guild
    let [dms, setDMs]  = useState([]); // list of dm channels user has
    let [messages_id, set_messages_id] = useState("") // used for applying correct channel to messages component
    let [channelName, setChannelName] = useState("") // used for naming messages component
   let [channelDisplayMode, setChannelDisplayMode]  = useState("none") // determins what to display in side bar

    // calls functions below after component mounts
    useEffect(() => {
        getGuilds().then(guilds_tmp => { setGuilds(guilds_tmp) })
        getDMs().then(dms_tmp => { setDMs(dms_tmp) })
    }, []);

    // when clicking on guild -> get guild channels -> set channels
    const guild_click = async (guild_id) => {
        getChannels(guild_id)
            .then(channels_tmp => setGuildChannels(channels_tmp.channels))
        setChannelDisplayMode("channels")
    }

    // generate lists of rendered components containing usernames
    let dms_rendered = Array.from(dms).map((dm, index) =>  { return (
        <button onClick={() => {set_messages_id(dm.id); setChannelName(dm.recipients.map(user => user.username).join(", "))}} key={index} className="channel-container">{dm.recipients.map(user => user.username).join(", ")}</button>
    ) })
    let guilds_rendered = Array.from(guilds).map((guild, index) =>  { return (
        <button onClick={() => guild_click(guild.id)} key={index} className="channel-container">{guild.name}</button>
    ) })
    let guild_channels_rendered = Array.from(guildChannels).map((channel, index) => {
        return (<button
            onClick={() => {
                set_messages_id(channel.channel_id);
                setChannelName(channel.channel_id);
                setChannelDisplayMode("none")}
            }
            key={index} className="channel-container">{channel.channel_id}</button>)
    })

    const updateChannelDisplayMode = (mode) => {
        if (channelDisplayMode === mode) {
            setChannelDisplayMode("none")
        } else {
            setChannelDisplayMode(mode)
        }
    }

    return (
<<<<<<< Updated upstream
        <>
        <div className="Navbar">

            <div>
                <button className={"b1"} onClick={logOut}>Log Out</button>
                <button className={"b1"} onClick={() => updateChannelDisplayMode("server")}>Servers</button>
                <button className={"b1"} onClick={() => updateChannelDisplayMode("dms")}>opts</button>
            </div>
            <div>
                <h1 className={"header-1"}>Smart Scholars</h1>
            </div>
        </div>
=======
        <div id={"home-wrapper"}>
            <div className="Navbar">
                <div>
                    <button className={"b1"} onClick={() => logOut()}>Log Out</button>
                    <button className={"b1"} onClick={() => updateChannelDisplayMode("server")}>Servers</button>
                    <button className={"b1"} onClick={() => updateChannelDisplayMode("dms")}>DM's</button>
                </div>
                <div>
                    <h1 className={"header-1"}>ALT DISCORD</h1>
                </div>
            </div>
>>>>>>> Stashed changes
            <div id={"body"}>
                {channelDisplayMode === "server" && <div className={"channel-list"}>{guilds_rendered}</div>}
                {channelDisplayMode === "dms" && <div className={"channel-list"}>{dms_rendered}</div>}
                {channelDisplayMode === "channels" && <div className={"channel-list"}>{guild_channels_rendered}</div>}

                <Messages id={messages_id} name={channelName}/>
            </div>
<<<<<<< Updated upstream
        </>
=======
        </div>
>>>>>>> Stashed changes
    )


}

export default Home;