import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { deleteClient } from '../redux/slice/clientList';

const ChatMain = ({ messages, typingStatus, scrollRef }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const clientName = useSelector((state) => state.clientState.value);

    const handleLogOut = () => {
        dispatch(deleteClient())
        localStorage.removeItem("userToken")
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
                    message.name === clientName ? (
                        <div className="chatsMessages" key={message.id}>
                            <p className='sender'>{clientName ?? ""}</p>
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