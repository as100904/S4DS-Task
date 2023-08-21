import React from 'react'
import '../App.css'
import ProductSection from './ProductSection'
import Menu from './Menu'


function Main() {
  
 return (
      
      <div className='main'>
        {/* {menuVisible && <Menu />}  */}
        <Menu />
        <ProductSection />
      </div>
    
  )
}

export default Main