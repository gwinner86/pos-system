import React from 'react'
import Card from '../../components/Card'
import './Index.css'
import ShopIcon from '@mui/icons-material/Shop'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import StatsCard from '../../components/StatsCard'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import DahsboardBarChart from '../../components/DahsboardBarChart'

function Index() {
  return (
    <div className='dashboard'>

      {/* ROW 1 */}
       <div className="first-item">
           <Card title="123454" subtitle="Total Purchase Due" backgroundcolor="#FEEDED" icon={<ShopIcon style={{color : "#FF9F43"}} />} />
       </div>
       <div className="first-item">
           <Card title="1454" subtitle="Total Sales Due" backgroundcolor="#E5F8ED" icon={<PointOfSaleIcon style={{color : "#28C76F"}} />} />
       </div>
       <div className="first-item">
           <Card title="3454" subtitle="Total Sale Amount" backgroundcolor="#E0F9FC" icon={<DownloadIcon style={{color : "#38DAED"}} />} />
       </div>
       <div className="first-item">
           <Card title="5454" subtitle="Total Sale Due" backgroundcolor="#FCEAEA" icon={<UploadIcon style={{color : "#EA5455"}} />} />
       </div>

       {/* Row 2 */}
       <div className="second-item" style={{ backgroundColor : "#FF9F43"}} >
           <StatsCard title="100" subtitle="Customers" Icon={Person2OutlinedIcon} />
       </div>
       <div className="second-item" style={{ backgroundColor : "#00CFE8"}}>
           <StatsCard title="400" subtitle="Suppliers" Icon={PersonAddOutlinedIcon}/>
       </div>
       <div className="second-item" style={{ backgroundColor : "#1B2850"}}>
           <StatsCard title="500" subtitle="Purchase invoice" Icon={DescriptionOutlinedIcon}/>
       </div>
       <div className="second-item" style={{ backgroundColor : "#28C76F"}}>
           <StatsCard title="350" subtitle="Sales invoice" Icon={FileCopyOutlinedIcon} />
       </div>



       {/* Row 3 */}

            <div className="graph-third-item-first">
                <h3> Hello </h3>
                <DahsboardBarChart />
            </div>

            <div className="table-third-item-second">
                <h2> Scond column</h2>
                
            </div>
       </div>

  )
}

export default Index