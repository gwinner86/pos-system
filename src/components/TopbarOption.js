import React from 'react'
import { Avatar } from '@material-ui/core'
import './TopbarOption.css'

function TopbarOption({Icon,title,onClick}) {
  return (
    <div onClick={onClick} className="header_option">
            {Icon && <Icon className='header_icon' />}
           <h3 className='header_title'>{title}</h3>
    </div>
  )
}

export default TopbarOption