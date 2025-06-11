import React, { useState } from 'react'

const CartButton = () => {
    const [count, setcount]= useState(0);
    const handleCart= (e)=>{
        e.preventDefault()
        setcount((prev)=>prev+1)
    }
  return (
    <div>
       { count===0? <h1>Cart is Empty</h1>:<h1>items in Cart: {count}</h1>}
        <button onClick={handleCart}>Cart</button>
    </div>
  )
}

export default CartButton