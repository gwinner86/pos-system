import React from 'react'
import './StatsCard.css'



function StatsCard({title,subtitle,Icon}) {
  return (
    <div className='stats-card'>
          <div className='stats-text' >
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
          </div>
          <div className='stats-icon'>
                 {Icon && <Icon className='stats-item-icons' />}
          </div>
    </div>
  )
}

export default StatsCard