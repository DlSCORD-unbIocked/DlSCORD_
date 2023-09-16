import './messages.scss';
import { useEffect, React, Component, useState} from "react";
import {getMessages} from "./lib";

const Messages = (props) => {
    let [message2b, setMessage2b] = useState("")
    let [messages, setMessages] = useState([])
    const handleSetMessage = (e) => { setMessage2b(e.target.value) }
    const sendMessage = async (e) => {
        e.preventDefault()
        console.log(props.id)
       await fetch(
        `https://discord.com/api/v9/channels/${props.id}/messages`, {
            method: "POST",
            body: JSON.stringify({"content": message2b}),
            headers: {
                'Authorization': document.cookie.slice(6),
                "Content-Type": "application/json"
            }
        })
    }

    useEffect(() => {
        if (props.id) {
            getMessages(props.id).then(messages_tmp => {
                setMessages(messages_tmp)
            })
        }
    }, [props.id]);

    let messages_rendered = Array.from(messages).reverse().map((message, index) => {
        return (
            <div className={"message"} key={index}>
                <h4>{message.author.username}</h4>
                <h4>{message.author.timestamp}</h4>
                <h4>{message.content}</h4>
            </div>
        )
    })

    return (
        <div id={"messages-container"}>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div id={"messages-wrapper"}>
                {messages_rendered}
            </div>
            <div>
                <input id="textBox" type="text" value={message2b} onChange={handleSetMessage} placeholder={"Send Message"}/>
                <button id="sendButton" onClick={sendMessage}>{">"}</button>
            </div>
        </div>
    )
}
export default Messages;