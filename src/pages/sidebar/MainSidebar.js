import React,{useState} from 'react'
import './Sidebar.css'
import { Sidebar, Menu, SubMenu, MenuItem,useProSidebar  } from 'react-pro-sidebar';
import { IconButton,Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import  MenuOutlinedIcon  from '@mui/icons-material/MenuOutlined'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const Item = ({title,to,icon,selected,setSelected}) => { 
     return (
     <MenuItem active={selected === title}  routerLink={<Link to={to} />} icon={icon} onClick={() => setSelected(title)}>
       {title}
     </MenuItem>
     )
}



function MainSidebar() {

  const { collapseSidebar } = useProSidebar(); 

  const [isCollapsed,setIsCollapsed] = useState(false)
  const [selected,setSelected] = useState("Dashboard")

  return (
    <div className='sidebar'>
       <Sidebar defaultCollapsed={isCollapsed}>
        <Menu>
          <MenuItem 
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon = {isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style = {{
              margin : "10px 0 20px 0"
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="10px">
                  <h3>POS</h3>
                  <IconButton onClick={() => collapseSidebar()}>
                      <MenuOutlinedIcon />
                  </IconButton>
              </Box>
            )}
         </MenuItem>

          <Item 
          title="Dashboard"
          to="/"
          icon={<DashboardIcon />}
          selected={selected}
          setSelected={setSelected}
          />
        
          <SubMenu label="Products" icon={<MenuOutlinedIcon />}>
          <Item 
            title="Products List"
            to="/getproducts"
            selected={selected}
            setSelected={setSelected}
            />
            <Item 
            title="Add Product"
            to="/addproduct"
            selected={selected}
            setSelected={setSelected}
            />
            <Item 
            title="Categories List"
            to="/getcategories"
            selected={selected}
            setSelected={setSelected}
            />
            <Item 
            title="Add Category"
            to="/addcategory"
            selected={selected}
            setSelected={setSelected}
            />
            <Item 
            title="Brands List"
            to="/getbrands"
            selected={selected}
            setSelected={setSelected}
            />

           <Item 
            title="Add Brand"
            to="/addbrand"
            selected={selected}
            setSelected={setSelected}
            />

            {/* addbrand */}
    
          </SubMenu>
          <SubMenu label="Sales" icon={<ShoppingCartIcon />}>
            <Item
              title="Sales List"
              to="/getsales"
              selected={selected}
              setSelected={setSelected}
             />
             <Item
              title="New Sale"
              to="/addsale"
              selected={selected}
              setSelected={setSelected}
             />

            {/* <MenuItem  onClick={() => setSelected("Sales")}  routerLink={<Link to="test" />} active="true"> Add Sales </MenuItem> */}
          
          </SubMenu>
        
        </Menu>
       </Sidebar>
    </div>
  )
}

export default MainSidebar