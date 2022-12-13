import React from 'react'
import './Card.css'



function Card({title,subtitle,icon,backgroundcolor}) {
  return (
    <div className='card'>
         <div className='icon' style={{ backgroundColor : backgroundcolor}}>
              {icon}
         </div>
         <div className='card-text'>
              <h4>${title}</h4>
              <p>{subtitle}</p>
         </div>
    </div>
  )
}

export default Card