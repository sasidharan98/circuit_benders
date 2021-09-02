import React from 'react'
import './Cart.css'
import CartItem from './CartItem'
const Cart = () => {
    return (
        <div>
            <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {/* {cartItems.length === 0 ? ( */}
            <div>
              <CartItem />
              <CartItem />
              {/* <Link to="/">Go Back</Link> */}
            </div>
          {/* ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )} */}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal 0 items</p>
            <p>12308</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Cart
