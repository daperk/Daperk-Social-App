import './navBar.scss'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from "react";
import { AuthContext } from '../../context/authContext';


const Navbar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className="left">
            <Link to="/" style={{textDecoration: "none"}}>
            <span className='logo'>DaperkSocial</span>
            </Link>
            <i><HomeIcon /></i>
            <i>{darkMode ? (<LightModeIcon onClick={toggle}/>) : (<DarkModeIcon onClick={toggle}/>)}</i>
            <i><GridViewIcon/></i>
            <div className='search'>
            <i><SearchIcon/></i>
            <input type="text" placeholder='Search...' />
            </div>
        </div>
        <div className="right">
            <i><PersonIcon/></i>
            <i><EmailIcon/></i>
            <i><NotificationsIcon/></i>
            <div className="user">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar