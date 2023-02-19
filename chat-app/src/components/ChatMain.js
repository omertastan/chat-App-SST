import React from 'react'
import { useNavigate } from "react-router-dom"

const ChatMain = ({ messages, typingStatus, scrollRef }) => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem("userName")
        navigate("/")
        window.location.reload()
    }

    return (
        <>
            <header className='mainHeader'>
                <p>Chat with Botty</p>
                <button className='logOutBtn' onClick={handleLogOut}>Log Out</button>
            </header>


            <div className='mainMessageDiv'>
                {messages.map(message => (
                    message.name === localStorage.getItem("userName") ? (
                        <div className="chatsMessages" key={message.id}>
                            <p className='sender'>You</p>
                            <div className='senderDiv' ref={scrollRef}>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="chatsMessages" key={message.id}>
                            <p>{message.name}</p>
                            <div className='messagegetter' ref={scrollRef}>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    )
                ))}

                <div className='status'>
                    <p>{typingStatus}</p>
                </div>
            </div>
        </>
    )
}

export default ChatMain