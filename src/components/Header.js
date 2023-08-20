import React  from 'react'
import '../App.css'

function Header({menuVisible , setMenuVisible}) {
  
    return (
    <div className='header'>
        <button onClick={ () => {setMenuVisible(!menuVisible)}}><img src='https://i.imgur.com/Urrlcat.png' alt='menu'/></button>
        <img src="https://i.imgur.com/MYnfLsK.png" alt='logo' />
    </div>
    
  )
}

export default Header