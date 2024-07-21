import { AuthContext } from '../../context/authContext';
import { useContext } from "react";
import './stories.scss'

const Stories = () => {

    const {currentUser} = useContext(AuthContext);

//Temporary:
const stories = [
    {
        id:1, 
        name:"Daniel Pena",
        img:  "https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id:2, 
        name:"Daniel Pena",
        img: 
        "https://images.pexels.com/photos/27063831/pexels-photo-27063831/free-photo-of-a-woman-sitting-on-top-of-a-white-object.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id:3, 
        name:"Daniel Pena",
        img: 
        "https://images.pexels.com/photos/18545116/pexels-photo-18545116/free-photo-of-woman-with-laptop-sitting-in-front-of-a-coffee-shop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id:4, 
        name:"Daniel Pena",
        img: 
        "https://images.pexels.com/photos/24253539/pexels-photo-24253539/free-photo-of-a-bridge-over-a-river-with-a-city-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

  return (
    <div className='stories'>
            <div className='story'>
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className='story'>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories