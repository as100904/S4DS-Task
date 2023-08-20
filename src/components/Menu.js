import React, { useContext} from 'react'
import '../Menu.css'
import { FilteredContext, MenuContext, ProductContext } from '../App.js'
import '../App.css'
import '../Menu.css'

function Menu() {
    const categories=["smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture",
    "tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags",
    "womens-jewellery","sunglasses","automotive","motorcycle","lighting"]

    const productsContext = useContext(ProductContext)
    const menuContext = useContext(MenuContext)
    const {menuVisible , setMenuVisible} = menuContext
    const Allproducts  = productsContext
    const filteredContext = useContext(FilteredContext)

    const filterProduct = (category) => {
        const filteredProducts= Allproducts.filter((product) => { return product.category === category })
        console.log(category)
        console.log(filteredProducts)
        filteredContext.setFilteredProducts(filteredProducts)
    }

    return (
    <div className='menu'>
        <button className='closeMenu' onClick={() => {setMenuVisible(!menuVisible)}}><img src='https://i.imgur.com/hutSn84.png' alt='closemenu' /></button>

         <ul className='categorylist'>
            <li>
                <h4 style={{
                color:'#fff',
                marginBottom:'15px',
                marginTop:'15px'
                }}>Select a category:</h4>
            </li>

            <li className='category' onClick={() => {filterProduct([])}}>All Products</li>

            {categories.map( (category ,index) => {
                return <li className='category capitalize' key={index} onClick={()=>{filterProduct(category)}}>{category}</li>
            })}

        </ul>
        
    </div>
  )
}

export default Menu