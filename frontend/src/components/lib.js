// logs user out by removing token
const logOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.open("/", "_self");
}

const getToken = () => {
    let cookie_raw = document.cookie;
    let token = cookie_raw.slice(6, cookie_raw.indexOf(";"))
    return token;
}
    

// get list of servres you are  apart of
const getGuilds =  async () => {
    let token = await getToken();
    let guilds = await fetch('https://discordapp.com/api/users/@me/guilds', {
        headers: {
            'Authorization': token
        }
    }).then(data => data.json())
    console.log(guilds)
    return guilds;

}

// get list of people you are dming
const getDMs =  async () => {
    let token = await getToken();
    let dms = await fetch(
        "https://discord.com/api/users/@me/channels", {
        headers: {
            'Authorization': token
        }
    }).then(data => data.json())
    console.log(dms)
    return dms
}


// used to get messages from channel w/ the specified id
const getMessages = async(id) => {
    let token = await getToken();
    let content = await fetch(
        `https://discord.com/api/v9/channels/${id}/messages`, {
            headers: { 'Authorization': token }
        }
    ).then(data => data.json())
    console.log(content)
    return content;
}

const getChannels = async(guild_id) => {
    let token = await getToken();
    let data =  await fetch(`https://discordapp.com/api/guilds/${guild_id}/active-channels`, {
        headers: {
            'Authorization': token
        }
    }).then(data => data.json())
    console.log(data)
    return data;
}

export {getDMs, getGuilds, logOut, getMessages, getChannels, getToken}
