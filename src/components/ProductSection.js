import React, { useContext, useEffect , useState } from 'react'
import axios from 'axios'
import ProductTile from './ProductTile'
import '../App.css'
import ProductDetail from './ProductDetail'
import Pagination from './Pagination'
import { FilteredContext } from '../App'

function ProductSection() {
    const filteredContext = useContext(FilteredContext)
    const filteredProducts  = filteredContext.filteredProducts
    const [products,setProducts] = useState([])
    const [pageNo , setPageNo] = useState(1)
    // const [fetchError ,setFetchError] = useState(false)
    const [displayProductDetail , setDisplayProductDetail] = useState(false)
    const [selectedProduct , setSelectedProduct] = useState({})
    
    let isFilterPresent = false
    
    if(filteredProducts.length === 0){
        isFilterPresent = false
        console.log('filter is []')
    }
    else{
        isFilterPresent = true
        console.log('filter is not []')
    }

    const skip = 0 + 10*(pageNo - 1)
    const limit = 10

    useEffect(() => {
        axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
        .then( response => {
            console.log(response.data)
            setProducts(response.data.products)
        })
        .catch( error => {
            console.log(error)
            // setFetchError(true)
        })
    },[skip])

    const incrementPageNo = () => {
        if(pageNo < 10){
            setTimeout(() => {window.scrollTo(0,0)} , 1000)
            setPageNo(pageNo + 1)
        }
    }

    const decrementPageNo = () => {
        if(pageNo > 1){
            setTimeout(() => {window.scrollTo(0,0)} , 1000)
            setPageNo(pageNo - 1)
        }
    }

    return (
    <section className='productSection'>
        { (isFilterPresent) ?  (!displayProductDetail ? 
        <div> 
            <h2 className='capitalize' style={{position:'relative', left:'34%', marginBottom: '15px'}}>
                Category : {filteredProducts[0].category}
            </h2>
            {filteredProducts.map( (product) => {
            return  <li key={product.id} style={{listStyleType: 'none'}}>
                    <ProductTile setDisplayProductDetail={setDisplayProductDetail} setSelectedProduct={setSelectedProduct} product={product} />
                    </li>        
            })}
        </div>  
        : <ProductDetail setDisplayProductDetail={setDisplayProductDetail} product={selectedProduct}/>) : 
         
        (!displayProductDetail ? 
            <div> 
                <h2  style={{position:'relative', left:'42%', marginBottom: '15px'}}>
                All Products
                </h2>
                {products.map( (product) => {
                return <li key={product.id} style={{listStyleType: 'none'}}>
                        <ProductTile setDisplayProductDetail={setDisplayProductDetail} setSelectedProduct={setSelectedProduct} product={product} />
                        </li>
                })}
                <Pagination pageNo={pageNo} incrementPageNo={incrementPageNo} decrementPageNo={decrementPageNo} />
            </div>  
            : <ProductDetail setDisplayProductDetail={setDisplayProductDetail} product={selectedProduct}/>) }
        
           
    </section>
    
  )
}

export default ProductSection