import React from 'react'
import './Header.css'


function Header({title, subtitle}) {
  return (
    <div className='header'>
        <h2>{title}</h2>
        <h6> {subtitle}</h6>
    </div>
  )
}

export default Header