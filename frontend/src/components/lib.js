const logOut = (e) => {
    e.preventDefault()
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "/home"
    return false
}

const getGuilds =  async () => {
    let guilds = await fetch('https://discordapp.com/api/users/@me/guilds', {
        headers: {
            'Authorization': document.cookie.slice(6)
        }
    }).then(data => data.json())
    console.log(guilds)
    return guilds;

}

// i pushed ok

const getDMs =  async () => {
    let dms = await fetch(
        "https://discord.com/api/users/@me/channels", {
        headers: {
            'Authorization': document.cookie.slice(6)
        }
    }).then(data => data.json())
    console.log(dms)
    return dms
}

export {getDMs, getGuilds, logOut}