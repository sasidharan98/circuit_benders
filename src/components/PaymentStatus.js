import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
const PaymentStatus = ({match}) => {
const[values,setValues]=useState({
    success:false,
    error:false
})

useEffect(() => {
    getStatus();
}, [])
const{success,error}=values
const  getStatus = () => {
 
    db.collection('payments').doc('xvJnHNyJDxX2LBhdtbPD').get().then(value=>{
        console.log(value.data())
        console.log(match.params.ORDERID)
        console.log(match.params.ORDERID)
        if(value)
        {
            value.data().paymentHistory.map((data)=>{
                if(data.ORDERID===match.params.orderId)
                {
                    if(data.STATUS==='TXN_SUCCESS')
                    {
                        setValues({...values,success:true,error:false})
                    }
                    
                }
                else
                {
                    setValues({...values,success:false,error:"Payment Failed"})
                }
            })
        }
    })
}


    return (
        <div>
            {
                success && <h1>Paid Succesfully</h1>
            }
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
}

export default PaymentStatus
