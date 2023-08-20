import React, { useState } from 'react'
import '../IndividualProduct.css'

function ProductDetail({ setDisplayProductDetail , product}) {
  const [selectedImg , setselectedImg] = useState(product.thumbnail)
  const productImageList = product.images
  const discountedPrice = (product.price*(1-product.discountPercentage/100)).toFixed(2)

  return (
    <div className='individualProductTile'>
      <button className='link buttonanimation' onClick={() => {setTimeout(()=>{setDisplayProductDetail(false)} , 400)}}>
        <img src='https://i.imgur.com/EaBaSMm.png' alt='leftarrow'/>Back
      </button>
      
      <div className='ProductContainer'>
        <ul className='ProductImg'>
          <img id='mainImg' src={selectedImg} alt='thumbnail' />
          {productImageList.map( (img) => {
          return <li style={{listStyleType:'none' , display: 'inline-block'}}>
            <img id='subImages' onClick={() =>{setselectedImg(img)}} src={img} alt='images' />
          </li>
          })}
        </ul>  
      
        <div className='ProductInfo'>
        <h1 className='pad-top-15 capitalize'>{product.title}</h1>
        <h4 className='whitespace-pre'>Brand: {product.brand}</h4>
        <h4 className='capitalize'>Category: {product.category}</h4>
        <h3 className='whitespace-pre pad-top-10'>Price: ${discountedPrice}  <del className='strikethrough'>${product.price}</del>  <span id='discount'>({product.discountPercentage}% off)</span>   
        </h3>
        <h3 className='pad-top-10'>
          {product.stock > 20 ? <span style={{color:'green'}}>In Stock</span> : <span style={{color:'red'}}>Low stock</span>}
        </h3>
        <br />
        <h3 className='whitespace-pre'><img src='https://i.imgur.com/ZqGJrPj.png' alt='ratingStar' />  {product.rating}/5</h3>
        <h4 className='pad-top-15'>Description: </h4>
        <p className=''>{product.description}</p>
        </div>

      </div>
      
    </div>

  )
}

export default ProductDetail