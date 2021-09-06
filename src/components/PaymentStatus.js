import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { db } from '../firebase'
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import Product from './Product'
const PaymentStatus = ({match}) => {
const[values,setValues]=useState({
    success:false,
    error:false
})
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart);
const { cartItems } = cart; 
cartItems.map((item) => {
    dispatch(removeFromCart(item.product));
})

useEffect(() => {
    getStatus();
    removeFromCart();
}, [])
const{success,error}=values

const  getStatus = () => {

      
    db.collection('payments').doc('xvJnHNyJDxX2LBhdtbPD').get().then(value=>{
        // console.log(value.data())
        // console.log(match.params.ORDERID)
        // console.log(match.params.ORDERID)
        if(value)
        {
            value.data().paymentHistory.map((data)=>{
                if(data.ORDERID===match.params.orderId)
                {
                    if(data.STATUS==='TXN_SUCCESS')
                    {
                        return setValues({...values,success:true,error:false})
                    }
                    
                }
                else
                {
                    return setValues({...values,success:false,error:"Payment Failed. Please try after sometime"})
                }
            })
        }
    })
}


    return (
        <div>
            {
                success && <div><h4>Your payment is successfull and order will be delivered within 5 decades</h4>
                <Product /></div>
            }
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
}

export default PaymentStatus
