import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"
const Item = () => {
    return (
        <div className="item">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="item"/>
            <div className="item_info">
            <p className="info_name">PS5</p>
            <p className="info_description">Can play games</p>
            <p className="info_price">49999</p>
            <Link to ={`/product/$${111}`} className = "info_button" >
            View </Link>
            </div>
        </div>
    )
}

export default Item
