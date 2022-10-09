import { useContext } from 'react';
import './index.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const SideBar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
      <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{textDecoration:"none"}}>
          <span className='logo'>Admin-Panel</span>
        </Link>
      </div>
          <hr/>
          <div className='center'><ul>
            <p className='title'>MAIN</p>
              <li><DashboardIcon className='icon'/><span>Dashbord</span></li>
        <p className='title'>LISTS</p>
              <Link to='/users' style={{textDecoration:"none"}}>
                <li><AccountCircleIcon className='icon' /><span>Users</span></li>
              </Link>
              <Link to='/products' style={{textDecoration:"none"}}>
                <li><InventoryIcon className='icon' /><span>Products</span></li>
              </Link>
              <li><BorderStyleIcon className='icon'/><span>Orders</span></li>
              <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
              <p className='title'>USEFUL</p>
              <li><QueryStatsIcon className='icon'/><span>Stats</span></li>
              <li><CircleNotificationsIcon className='icon'/><span>Notifications</span></li>
              <p className='title'>SERVICE</p>
              <li><FavoriteIcon className='icon'/><span>System Health</span></li>
              <li><PsychologyIcon className='icon'/><span>Logs</span></li>
              <li><SettingsIcon className='icon'/><span>Settings</span></li>
              <p className='title'>USER</p>
              <li><AssignmentIndIcon className='icon'/><span>Profile</span></li>
              <li><LogoutIcon className='icon'/><span>Logout</span></li>
          </ul></div>
          <div className='bottom'>
            <div className='colorOption'  onClick={() => dispatch({ type: "LIGHT" })}></div>
            <div className='colorOption' onClick={() => dispatch({ type: "DARK" })}></div>
          </div>
      </div>
  )
}

export default SideBar