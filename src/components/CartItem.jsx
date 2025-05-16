import React from 'react'

function CartItem(props) {
  const {item : {id, price, title, quantity}} = props
  return (
    <div className="flex justify-between px-1.5 mb-1">
      <p>{title.split(' ')[0]}</p>
      <div className="flex gap-1"> 
        <button className="border w-5 h-5 flex justify-center items-center">-</button>
        <button className="border w-5 h-5 flex justify-center items-center">+</button>
      </div>
      <p>{quantity}* ฿ {price}</p>
    </div>
  )
}

export default CartItem
