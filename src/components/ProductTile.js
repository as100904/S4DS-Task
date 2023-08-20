import React from 'react'

function Product({ setSelectedProduct ,setDisplayProductDetail , product }) {
  
  const discountedPrice = (product.price*(1-product.discountPercentage/100)).toFixed(2)
  const clickHandler = () =>{
    setDisplayProductDetail(true)
    setSelectedProduct(product)
  }
  return (
      <div className='productTile link' onClick={clickHandler} >

        <img src={product.thumbnail} alt={product.title} />
        <h1 className='pad-top-15 capitalize'>{product.title}</h1>
        <h4 className='whitespace-pre'>Brand: {product.brand}</h4>
        <h4 className='whitespace-pre pad-top-10'>Price: ${discountedPrice}  <del className='strikethrough'>${product.price}</del>  <span id='discount'>({product.discountPercentage}% off)</span>   {product.stock > 20 ? 
          <span style={{color:'green'}}>In Stock</span> : <span style={{color:'red'}}>Low stock</span>}
        </h4>
        <p className='pad-top-10'>{product.description}</p>
      </div>
  )
}

export default Product