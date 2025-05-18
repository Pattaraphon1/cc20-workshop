import React from 'react'

function CartItem(props) {
  const { addToCart, decQuantity, item : {id, price, title, quantity}} = props
  console.log(decQuantity)
  return (
    <div className="flex justify-between px-1.5 mb-1">
      <p>{title.split(' ')[0]}</p>
      <div className="flex gap-1"> 
        <button className="border w-5 h-5 flex justify-center items-center"
        onClick={() => addToCart(id)}>+</button>
        <button className="border w-5 h-5 flex justify-center items-center" 
        onClick={() => decQuantity(id)}>-</button>
      </div>
      <p>{quantity}* ฿ {price}</p>
    </div>
  )
}

export default CartItem
