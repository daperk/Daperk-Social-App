import './leftBar.scss'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StoreIcon from '@mui/icons-material/Store';
import MovieIcon from '@mui/icons-material/Movie';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AuthContext } from '../../context/authContext';
import { useContext } from "react";

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
        <div className="user">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            </div>
            <div className='item'>
              <i><PeopleAltIcon/></i>
              <span>Friends</span>
            </div>
            <div className='item'>
              <i><Diversity3Icon/></i>
              <span>Groups</span>
            </div>
            <div className='item'>
              <i><StoreIcon/></i>
              <span>Marketplace</span>
            </div>
            <div className='item'>
              <i><MovieIcon/></i>
              <span>Watch</span>
            </div>
            <div className='item'>
            <i><ShutterSpeedIcon/></i>
              <span>Memories</span>
            </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Your shortcuts </span>
            <div className='item'>
              <i><CalendarMonthIcon/></i>
              <span>Events</span>
            </div>
            <div className='item'>
              <i><Diversity3Icon/></i>
              <span>Gaming</span>
            </div>
            <div className='item'>
              <i><StoreIcon/></i>
              <span>Gallery</span>
            </div>
            <div className='item'>
              <i><MovieIcon/></i>
              <span>Videos</span>
            </div>
            <div className='item'>
            <i><ShutterSpeedIcon/></i>
              <span>Messages</span>
            </div>
        </div>
        <hr/>
        <div className="menu">
        <span>Others</span>
            <div className='item'>
              <i><Diversity3Icon/></i>
              <span>Fundraiser</span>
            </div>
            <div className='item'>
              <i><StoreIcon/></i>
              <span>Tutorials</span>
            </div>
            <div className='item'>
              <i><MovieIcon/></i>
              <span>Courses</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar