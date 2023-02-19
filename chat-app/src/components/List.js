import React from 'react'

const List = () => {
    const user = localStorage.getItem("userName")



    return (
        <div className='leftbar'>
            <h2>Hello {user}</h2>
            <div>
                <h4 className='leftbarHeader'>Active Client</h4>
                <div className='leftbarHeaderClient'>
                    <p >{user}</p>
                </div>
            </div>
        </div>
    )
}

export default List