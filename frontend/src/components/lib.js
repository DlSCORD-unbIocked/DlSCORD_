import axios from 'axios';

const PROXY_URL = "50.62.183.223";
const PROXY_PORT = 80;


// logs user out by removing token
const logOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.open("/", "_self");
}

const getToken = () => {
    let cookie_raw = document.cookie;
    // console.log(cookie_raw.slice(6))
    // console.log(cookie_raw.slice(6, cookie_raw.indexOf(";")))
    // return cookie_raw.slice(6, cookie_raw.indexOf(";"))
    return cookie_raw.slice(6)
}



const getGuilds = async () => {
    let token = getToken();
    let guilds = await axios.get('https://discord.com/api/users/@me/guilds', {
        headers: {
            'Authorization': token
        },
        proxy: {
            host: PROXY_URL,
            port: PROXY_PORT,
        }
    }).then(response => response.data);

    console.log(guilds);
    return guilds;
}

const getDMs = async () => {
    let token = getToken();
    let dms = await axios.get('https://discord.com/api/users/@me/channels', {
        headers: {
            'Authorization': token
        },
        proxy: {
            host: PROXY_URL,
            port: PROXY_PORT,
        }
    }).then(response => response.data);

    console.log(dms);
    return dms;
}

const getMessages = async (id) => {
    let token = getToken();
    let content = await axios.get(`https://discord.com/api/v9/channels/${id}/messages`, {
        headers: {
            'Authorization': token
        },
        proxy: {
            host: PROXY_URL,
            port: PROXY_PORT,
        }
    }).then(response => response.data);

    console.log(content);
    return content;
}

const getChannels = async (guild_id) => {
    let token = await getToken();
    let data = await axios.get(`https://discord.com/api/guilds/${guild_id}/active-channels`, {
        headers: {
            'Authorization': token
        },
        proxy: {
            host: PROXY_URL,
            port: PROXY_PORT,
        }
    }).then(response => response.data);

    console.log(data);
    return data;
}
export {getDMs, getGuilds, logOut, getMessages, getChannels, PROXY_URL, PROXY_PORT, getToken}
