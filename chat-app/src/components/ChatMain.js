import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                <Row className='mainHeaderRow px-3 py-2'>
                    <Col xs={8} className="px-5">
                        <Row className="px-5 pt-2">
                            <Col xs={12}><p>ssttek</p></Col>
                            <Col xs={12}><p>Chat with Botty</p></Col>
                        </Row>
                    </Col>
                    <Col xs={4}><button className='logOutBtn' onClick={handleLogOut}>Log Out</button></Col>
                </Row>



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