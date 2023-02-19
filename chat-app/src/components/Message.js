import React, { useState } from 'react'
import { useSelector } from "react-redux";

const Message = ({ socket, setMessages, messages }) => {
    const [message, setMessage] = useState("")

    const clientName = useSelector((state) => state.clientState.value);

    const handleSendMessage = (e) => {
        e.preventDefault()
        setMessages([...messages, {
            text: message,
            name: clientName,
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id
        }])
        // Sending message to Botty
        socket.emit("user-message", message
        )

        setMessage("")
    }
    return (
        <div className='sendingMessage'>
            <form className='sendingMessageForm' onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder='Write message'
                    className='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button className="sendingMessageBtn">SEND</button>
            </form>
        </div>
    )
}

export default Message