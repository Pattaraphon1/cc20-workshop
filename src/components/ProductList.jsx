import React, { useState } from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
  const {products, addToCart} = props
 
  return (
    <div className="w-2/3 bg-blue-200 p-2">
      <h2 className='font-semibold p-2 mb-3 text-2xl rounded text-center'>Product List</h2>
      <div className="flex flex-wrap gap-3">
      {products.map(el => (
        <ProductCard key={el.id} productItem={el} addToCart={addToCart}/>
      ))
      }
      </div>
    </div>
  )
}

export default ProductList
