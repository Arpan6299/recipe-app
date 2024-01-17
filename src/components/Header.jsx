import React from 'react'
import {Link} from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <header className='header'>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to ="/contact">Contact</Link>
        </li>
        
      </ul>
      
    </header>
  )
}

export default Header
