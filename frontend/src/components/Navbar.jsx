import {useEffect, useState} from "react";
import {getGuilds, button_click_2, logOut} from "./lib";


const Navbar = () => {
    let [guilds, setGuilds]  = useState([]);
    useEffect(() => {
        (async () => { setGuilds(await getGuilds()) })();
    }, []);


    let serverButtons = Array.from(guilds).map((guild) =>  {
        return ( <button className="serverButton">{guild.name}</button>)
    })

    const button_click_1 = async (e) => {
        e.preventDefault();
    }

    //ok back whats progress update it works (all of guilds)
    //do we just need css? yes
    // then implement other buttons, but idk which oners were implemented in the first placej
    // uh we need the nav for dms and channels yes
    //
    //they should just alternate i thinko
    //
    // imma create dms button now




    return (
        <div className="sideNav">
            <button onClick={logOut} className="opts">Log Out</button>
            <button onClick={button_click_1}>Servers</button>
            <button onClick={button_click_2}>opts</button>
        <div style={{border: "1px solid black"}}>
            {serverButtons}
        </div>
        </div>
    ) 


}

export default Navbar;