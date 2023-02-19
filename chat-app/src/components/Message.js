import React, { useState } from 'react'

const Message = ({ socket, setMessages, messages }) => {
    const [message, setMessage] = useState("")
    const handleTyping = () => socket.emit("typing", `${localStorage.getItem("userName")} is typing`)

    const handleSendMessage = (e) => {
        e.preventDefault()
        setMessages([...messages, {
            text: message,
            name: localStorage.getItem("userName"),
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
                    onKeyDown={handleTyping}
                />
                <button className="sendingMessageBtn">SEND</button>
            </form>
        </div>
    )
}

export default Message