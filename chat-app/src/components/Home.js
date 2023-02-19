import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", name)
        navigate("/chat")
    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <h2 className='header'>Sign in to Chat with Botty</h2>
            <label htmlFor="name">Name</label>
            <input type="text"
                minLength={6}
                name="name"
                id='name'
                className='nameInput'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button className='home_btn'>SIGN IN</button>
        </form>
    )
}

export default Home