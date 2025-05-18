import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const { addToCart, carts, decQuantity } = props
  const total = carts.reduce((a,c) => a+=c.price*c.quantity,0)
  const vat = total*0.07
  const finalTotal = total + vat

  return (
    <div className='w-1/3 bg-yellow-100'>
      <h2 className='text-2xl rounded py-2 text-slate-600 ml-2'>Cart Items :</h2>
      {carts.length === 0 && <p className="ml-3 mb-3">Empty cart</p>}
      <div classname="flex flex-col gap-2 p-2">
        {carts.map(el => (
          <CartItem key={el.id} item={el} decQuantity={decQuantity} addToCart={addToCart} />
        ))}
      {carts.length > 0 && (
        <>
        <div className="divider">Total</div>
        <div className="flex flex-col p-2">
          <div className="flex justify-between">
            <p>Items Price</p>
            <p>฿ {total.toFixed(2)}</p>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p>฿ {vat.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>฿ {finalTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
          </>
          )}
      </div>
    </div>
  )
}

export default CartSummary
