import './profile.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Posts from '../../posts/Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/12341819/pexels-photo-12341819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
        className='cover' />
        <img src="https://lh3.googleusercontent.com/a/ACg8ocJKHD3_8c2c_C86i_YO79tu7dj7o1VL88MMHzj58aIxRDSrDH3l=s288-c-no" alt="" 
        className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://www.facebook.com/"><FacebookIcon fontSize='large'/></a>
            <a href="https://www.LinkedIn.com/"><LinkedInIcon fontSize='large'/></a>
            <a href="https://www.Instagram.com/"><InstagramIcon fontSize='large'/></a>
            <a href="https://www.Pinterest.com/"><PinterestIcon fontSize='large'/></a>
            <a href="https://www.x.com/"><XIcon fontSize='large'/></a>
          </div>
          <div className="center">
            <span>Daniel Pena</span>
            <div className="info">
              <div className="item">
                <PlaceRoundedIcon/>
                <span>Miami</span>
              </div>
              <div className="item">
              <LanguageRoundedIcon/>
              <span>DaperkSocial.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailRoundedIcon/>
            <MoreVertRoundedIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile