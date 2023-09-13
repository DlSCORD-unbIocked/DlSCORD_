import {button_click_1, button_click_2, logOut} from "./lib";

const Navbar = () => {
    let guilds = [];
    let guild_check = 'guild';





        return (
            <div>
                <button onClick={logOut} className="opts">Log Out</button>
                <button onClick={button_click_1}>Servers</button>
                <button onClick={button_click_2}>opts</button>
                {/*{rendered_guilds}*/}
            </div>
        );


}

export default Navbar;