import React from 'react'
import '../App.css'
import ProductSection from './ProductSection'
import Menu from './Menu'


function Main({menuVisible , setMenuVisible}) {
  
 return (
      
      <div className='main'>
        {menuVisible && <Menu />} 
        <ProductSection />
      </div>
    
  )
}

export default Main