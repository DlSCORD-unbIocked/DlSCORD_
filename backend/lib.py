import requests


def get_message(channel, key):
    message = list(
        reversed(
            requests.get(
                f"https://discord.com/api/v9/channels/{channel}/messages",
                headers={"authorization": key},
            ).json()
        )
    )
    return message


def get_dms(key):
    dms = requests.get(
        "https://discord.com/api/users/@me/channels",
        headers={"authorization": key},
    ).json()
    return dms


def get_guilds(key):
    guilds = requests.get(
        "https://discord.com/api/users/@me/guilds",
        headers={"authorization": key},
    ).json()
    return guilds


def get_channels(server, key):
    channels = requests.get(
        f"https://discord.com/api/guilds/{server}/channels",
        headers={"authorization": key},
    ).json()
    return channels


def send_message(channel, key, content):
    requests.post(
        f"https://discord.com/api/v9/channels/{channel}/messages",
        data={"content": content},
        headers={"authorization": key},
    )
