import React from 'react'
import './Topbar.css'
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined'
import  Avatar  from '@mui/material/Avatar'

function Topbar() {
  return (
    <div className='topbar'>
        <div className='header-items'>
             <NotificationAddOutlinedIcon />
           
        </div>
    </div>
  )
}

export default Topbar