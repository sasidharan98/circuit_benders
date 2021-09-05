import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"
const Item = ({ imageUrl, description, price, name, productId }) => {
    return (
        <>
        <Link to ={`/product/${productId}`} style={{ textDecoration: 'none', color: "inherit"}}>
        <div className="item" >
            <img src={imageUrl} alt={name} />
            <div className="item_info">
            <p className="info_name">{name}</p>
            <p className="info_description">{description.substring(0, 100)}...</p>
            <p className="info_price">₹{price}</p>
            <Link to ={`/product/${productId}`} className = "info_button" >
            View </Link>
            </div>
        </div>
        </Link>
        </>
    )
}

export default Item
