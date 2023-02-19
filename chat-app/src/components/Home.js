import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setClient } from '../redux/slice/clientList';

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "") {
            alert("Name can not be blank !!")
        } else {
            dispatch(setClient(name))
            localStorage.setItem("userToken", name)
            navigate("/chatPage")
        }


    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <h4 className='header'>Sign in to Chat with Botty</h4>
            <label htmlFor="name">Name</label>
            <input type="text"
                placeholder='Enter a name'
                minLength={3}
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