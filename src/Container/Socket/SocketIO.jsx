import React, {useState, useEffect} from 'react';
import io, { Socket } from 'socket.io-client';


//use io.connect
//const socket = io.connect("http://localhost:5000");
const SocketIO = () => {

    const[message, setMessage] = useState('');
    const[chat, setChat] = useState([])

    const sendChat = (e) => {
        e.preventDefault();
       // socket.emit('chat', {message});
        setMessage("");
    }

    // useEffect(() => {
    //     Socket.on("chat", (payload)=>{
    //         setChat([...chat,payload])
    //     })
    // })
    return(
        <>
        <h1>Chat App</h1>
        {/* {chat.map((payload,index)=>{
            return (
                <p key={index}>{payload.message}</p>
            )
        })} */}
        <form onSubmit={sendChat}>
            <input type="text" name="chat"
            placeholder="send text"
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
        </form>
        </>
    )
}

export default SocketIO;