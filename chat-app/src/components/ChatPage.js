import React, { useEffect, useState, useRef } from 'react'
import List from './List'
import ChatMain from './ChatMain'
import Message from './Message'

const ChatPage = ({ socket }) => {
    const scrollRef = useRef(null);
    const [messages, setMessages] = useState([])
    const [typingStatus, setTypingStatus] = useState("")
    useEffect(() => {
        socket.on("bot-message", data => {
            setMessages([...messages, {
                text: data,
                name: "Botty",
                id: data,
                socketID: data
            }])
        })
    }, [socket, messages])
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        socket.on("bot-typing", data => setTypingStatus(data))
    }, [socket])


    return (
        <div className="chatBase">
            <List />
            <div className='chatMain'>
                <ChatMain messages={messages} typingStatus={typingStatus} scrollRef={scrollRef} />
                <Message socket={socket} setMessages={setMessages} messages={messages} />
            </div>
        </div>
    )
}

export default ChatPage