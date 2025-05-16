import React from 'react'
import CartCount from "./CartCount"

function Header() {
  return (
    <div className="flex justify-between h-15 bg-pink-200">
      <div>
        Logo, Brand
      </div>
      <CartCount />
    </div>
  )
}

export default Header
