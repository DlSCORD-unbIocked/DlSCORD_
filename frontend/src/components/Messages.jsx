import './messages.scss';
import {useEffect, React, Component, useState, useRef} from "react";
import {getMessages} from "./lib";

const Messages = (props) => {

    let alignment_div = useRef(0)

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
        alignment_div?.current?.scrollIntoView()

    //     let messages_wrapper =
    //     messages_wrapper.scrollIntoView()
    }, [props.id]);

    let messages_rendered = Array.from(messages).reverse().map((message, index) => {
        return (
            <div className={"message"} key={index}>
                <h4>{message.author.username}</h4>
                {/*<h4>{message.timestamp}</h4>*/}
                <h4>{message.content}</h4>
            </div>
        )
    })

    return (
        <div id={"messages-container"}>
            <div id={"messages-channel-name"}>
                <h1>{props.name}</h1>
            </div>
            <div id={"messages-wrapper"}>
                {messages_rendered}
                <div id={"alignment-div"} style={{display:"none"}} ref={"alignment_div"}>For Alignment Only</div>
            </div>
<<<<<<< Updated upstream
            <div>
                <input id="textBox" type="text" value={message2b} onChange={handleSetMessage} placeholder={"Send Message"}/>
                <button id="sendButton" onClick={sendMessage}>{">"}</button>
=======
            <div id={"send-messages"}>
                <input type="text" value={message2b} onChange={handleSetMessage} placeholder={"Send Message"}/>
                <button onClick={sendMessage}>{">"}</button>
>>>>>>> Stashed changes
            </div>
        </div>
    )
}
export default Messages;