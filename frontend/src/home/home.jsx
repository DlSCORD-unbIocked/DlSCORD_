

const Home = () => {

    const logOut = (e) => {
        e.preventDefault()
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location = "/home"
        return false
    }

    const button_click_1 =  async () => {
        await fetch(
            window.location.origin + "/guild/0", {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: Json.stringify({"value": "1"})
            })
    }

    const button_click_2 =  async () => {
        await fetch(
            window.location.origin + "/dm/0", {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: Json.stringify({"token": "1"})
            })
    }
    let guilds = [];
    let guild_check = 'guild';
    let guild = (guild) => {
        const click = (e) => {
            e.preventDefault()
            if (guild_check == 'guild') {
            fetch(
                window.location.origin + "/channel/", {
                    method: "POST",
                    headers: {"Content-Type": "application/json",},
                    body: Json.stringify({"token": "1"})
                })
            } else  {
                fetch(
                    window.location.origin + "/messages/", {
                        method: "POST",
                        headers: {"Content-Type": "application/json",},
                        body: Json.stringify({"token": "1"})
                    })
            }


        }
        let message =guild['name']? guild['name']: guild['recipients']|join(', ')
        return( <button onClick={click()}>{message}</button>)

    }
    let rendered_guilds = guilds.map(guild)

    return (
        <>
            <div className="sidenav">
                <button onClick={logOut} className="opts">Log Out</button>

                <button onClick={button_click_1}>Servers</button>
                {/*<form action = {{"/guild/0"}} method = "post">*/}
                {/*    <input type= 'hidden' id='serverBtn' name="token" value="1" />*/}
                {/*        <button className = "opts">*/}
                {/*            Servers*/}
                {/*        </button>*/}
                {/*</form>*/}


                <button onClick={button_click_2}>opts</button>
                {/*<form action = {{"/dm/0"}} method = "post">*/}
                {/*    <input  type="hidden" id="dmBtn" name="token" value="1" />*/}
                {/*        <button className = "opts">DMs</button>*/}
                {/*</form>*/}



                {rendered_guilds}
                {/*<div id='guilds'>*/}
                    {/*{%if guilds%}*/}
                    {/*{%for guild in guilds%}*/}
                    {/*<form action = {{("/channel/" if (guild_check == 'guild') else "/home/")~guild['id']}} method = "post">*/}
                    {/*    <input type="hidden" name="token" value="1" />*/}
                    {/*        <button className="channelBtns">*/}
                    {/*            /!*{%if guild['name']%}*!/*/}
                    {/*            /!*{{guild['name']}}*!/*/}
                    {/*            /!*{%else%}*!/*/}
                    {/*            /!*{{guild['recipients']|join(', ', attribute = 'global_name')}}*!/*/}
                    {/*            /!*{%endif%}*!/*/}
                    {/*        </button>*/}
                    {/*</form>*/}
                    {/*{%endfor%}*/}
                    {/*{%endif%}*/}
                {/*</div>*/}
            </div>

            {/*<p id='home'>*/}
            {/*    /!*{%if home%}*!/*/}
            {/*    /!*{%for item in home%}*!/*/}
            {/*    /!*<br><b>{{item['author']['global_name']}}</b>:<br>{{item['content']}}<br>*!/*/}
            {/*        /!*{%endfor%}*!/*/}
            {/*        <form action = "" method = "post">*/}
            {/*            <input type="hidden" name="token" value="1" />*/}
            {/*            <input type="hidden" name="send" value="true" />*/}
            {/*            <input id="sendbox" name="message" type="text" placeholder="Send message..." autocomplete="off" />*/}
            {/*        </form>*/}

            {/*        /!*{%else%}*!/*/}
            {/*        <b id="ident" >You are not logged in yet</b>*/}
            {/*        <br>*/}
            {/*        <a href = "https://www.youtube.com/watch?v=YEgFvgg7ZPI" target="_blank" style="color:#Ee585b;">How to find discord token</a>*/}

            {/*            /!*{%endif%}*!/*/}
            {/*</p>*/}



        </>
    );
}
export default Home;