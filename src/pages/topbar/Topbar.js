import React from 'react'
import './Topbar.css'
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import  Avatar  from '@mui/material/Avatar'
import TopbarOption from '../../components/TopbarOption'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Topbar() {

const user = useSelector(selectUser);

  return (
    <div className='topbar'>
        <div className='header-items'>
             <TopbarOption title={user.username} Icon={Avatar} />
        </div>
    </div>
  )
}

export default Topbar