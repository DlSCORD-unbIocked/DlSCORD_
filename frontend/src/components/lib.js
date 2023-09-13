const logOut = (e) => {
    e.preventDefault()
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "/home"
    return false
}

const button_click_1 =  async () => {
    let guilds = await fetch('https://discordapp.com/api/users/@me/guilds', {
        headers: {
            'Authorization': document.cookie.slice(6)
        }
    })
        // .then(data => data.json())
    console.log(guilds)

}

const button_click_2 =  async () => {
    await fetch(
        window.location.origin + "/dm/0", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({"token": "1"})
        })
}

export {button_click_2, button_click_1, logOut}