import React from 'react'
import '../App.css'

function Pagination(props) {
  return (
    <ul className='pagination'>
        <li className='prevnext link whitespace-pre' onClick={props.decrementPageNo}>
            <img className='pageArrows' src='https://i.imgur.com/EaBaSMm.png' alt='left arrow'/> 
        </li>
            
        <li className='pageDetails' >Page {props.pageNo} out of 10</li>
            
        <li className='prevnext link whitespace-pre' onClick={props.incrementPageNo}>
            <img className='pageArrows' src='https://i.imgur.com/Fgp3T2n.png' alt='right arrow'/>
        </li>
    </ul>
  )
}

export default Pagination