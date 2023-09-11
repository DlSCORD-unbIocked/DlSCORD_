from flask import Flask, render_template, request
import requests

app = Flask(__name__, static_folder="./static")


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


@app.route(r"/")
def home():
    return render_template(
        "login.html",
    )


@app.route("/dms/0/")
def about():
    return render_template("index.html")


@app.route(r"/<guild>/<int:server>/", methods=["POST", "GET"])
def channels(server, guild):
    if "send" in request.form.keys():
        key, message = request.form["token"], request.form["message"]
        send_message(server, key, message)
        guilds, message = get_guilds(key), get_message(server, key)
    else:
        key = request.form["token"]
        message = False
        guilds = get_guilds(key)
        if guild == "channel":
            snav = get_channels(server, key)
        elif guild == "dms":
            snav = get_dms(key)
        else:
            snav = get_dms(key)
            message = get_message(server, key)

    return render_template(
        "index.html", key=key, guild_check=guild, messages=message, guilds=guilds, snav=snav
    )


if __name__ == "__main__":
    app.run(
        debug=True,
    )
