import React from 'react'
import { useSelector } from "react-redux";

const List = () => {
    const clientName = useSelector((state) => state.clientState.value);



    return (
        <div className='leftbar'>
            <h2>Hello {clientName ?? ""}</h2>
            <div>
                <h4 className='leftbarHeader'>Active Client</h4>
                <div className='leftbarHeaderClient'>
                    <p >{clientName ?? ""}</p>
                </div>
            </div>
        </div>
    )
}

export default List