import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';


export const ProductContext = React.createContext()
// export const MenuContext = React.createContext()
export const FilteredContext = React.createContext()

function App() {
  // const [menuVisible , setMenuVisible] = useState(false)
  const [products , setProducts] = useState([])
  const [ filteredProducts , setFilteredProducts ] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products?skip=0&limit=100')
      .then(response => {
        setProducts(response.data.products)
        console.log(response.data.products)
      })
      .catch(error =>{
        console.log(error)
      })
  },[])

  return (
    <div className="App">
      
      <Header />
      
      <div style={{
        width: '100%',
        height: '70px',
        position:'fixed',
        zIndex: '200'
      }}/>
      
      <ProductContext.Provider value={products}>
        <FilteredContext.Provider value={{filteredProducts: filteredProducts , setFilteredProducts: setFilteredProducts}}>
          {/* <MenuContext.Provider value={{menuVisible: menuVisible , setMenuVisible :setMenuVisible}}> */}
            <Main />
          {/* </MenuContext.Provider> */}
        </FilteredContext.Provider>
      </ProductContext.Provider>
      
      <Footer />
    </div>
  );
}

export default App;
