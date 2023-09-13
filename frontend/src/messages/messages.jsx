

const Messages = () => {

    const logOut = (e) => {
        e.preventDefault()
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location = "/messages"
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


                {/*<form action = {{"/dm/0"}} method = "post">*/}
                {/*    <input  type="hidden" id="dmBtn" name="token" value="1" />*/}
                {/*        <button className = "opts">DMs</button>*/}
                {/*</form>*/}

                <div id='guilds'>
                    {/*{%if guilds%}*/}
                    {/*{%for guild in guilds%}*/}
                    {/*<form action = {{("/channel/" if (guild_check == 'guild') else "/messages/")~guild['id']}} method = "post">*/}
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
                </div>
            </div>

            {/*<p id='messages'>*/}
            {/*    /!*{%if messages%}*!/*/}
            {/*    /!*{%for item in messages%}*!/*/}
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
export default Messages;