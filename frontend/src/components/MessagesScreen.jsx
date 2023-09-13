import {useState} from "react";


const Item = (props) => {

    // props['author']['global_name']}}</b>:<br>{{item['content']

    return (
    )
}
const MessagesScreen = (props) => {
    const [message, setMessage] = useState("")
    const handleMessageChange = (e) => { setMessage(e.target.value) }

   const sendMessage = (e) => {
      e.preventDefault()
       fetch (
           window.location.origin, {
               method: "POST",
               headers: {"Content-Type": "application/json",},
               body: Json.stringify({"message": message})
           }
       )

   }

    return (
        <>
            {props.items.map(<p>{props.author.global_name}:{props.content}</p>)}

            <form onSubmit={sendMessage}>
                <input type="submit" style={{display: "none"}}/>
                <input type="text" value={message } onChange={handleMessageChange} placeholder={"Send Mesage . . . "} autoComplete={"off"}/>
            </form>


        </>
    )

}