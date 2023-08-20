import React, { useEffect , useState } from 'react'
import axios from 'axios'
import ProductTile from './ProductTile'
import '../App.css'
import ProductDetail from './ProductDetail'
import Pagination from './Pagination'

function ProductSection() {
    const [products,setProducts] = useState([])
    const [pageNo , setPageNo] = useState(1)
    // const [fetchError ,setFetchError] = useState(false)
    const [displayProductDetail , setDisplayProductDetail] = useState(false)
    const [selectedProduct , setSelectedProduct] = useState({})

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
        { !displayProductDetail ? 
        <div> 
            {products.map( (product) => {
            return <li key={product.id} style={{listStyleType: 'none'}}>
                    <ProductTile setDisplayProductDetail={setDisplayProductDetail} setSelectedProduct={setSelectedProduct} product={product} />
                    </li>
            })}
            <Pagination pageNo={pageNo} incrementPageNo={incrementPageNo} decrementPageNo={decrementPageNo} />
        </div>  
        : <ProductDetail setDisplayProductDetail={setDisplayProductDetail} product={selectedProduct}/>}   
    </section>
  )
}

export default ProductSection