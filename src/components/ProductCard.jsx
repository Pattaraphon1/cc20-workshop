import React, { useState } from 'react'

function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false)
  const { addToCart ,productItem: { id, category, description, title, image, price, rating } } = props
  console.log(image)
  return (
    <div className="card bg-base-100 w-70 shadow-sm pt-5 mx-auto">
      <figure className='h-40 w-2/3 mx-auto'>
        <img className='h-full w-full object-contain'
          src={image}
          alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto text-center font-semibold line-clamp-1">{title}</h2>
        <p className="border w-35 p-2 mx-auto text-center font-bold rounded-full bg-pink-100 text-pink-500">{category}</p>
        <p className={`cursor-pointer ${showDesc ? '' : 'line-clamp-2'}`}
          onClick={()=>setShowDesc(prv=>!prv)}
        >{description}</p>
        <p className="text-2xl">{price} ฿</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" 
          onClick={()=> addToCart(id, title, price)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
