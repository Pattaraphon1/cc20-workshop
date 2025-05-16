import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const {carts} = props
  return (
    <div className='w-1/3 bg-yellow-100'>
      <h2 className='text-2xl rounded py-2 text-slate-600 ml-2'>Cart Items :</h2>
      <div classname="flex flex-col gap-2">
      {carts.map(el => (
        <CartItem key={el.id} item={el}/>
      ))}
      </div>
      {/* <pre>{JSON.stringify(carts,null,2)}</pre> */}
    </div>
  )
}

export default CartSummary
