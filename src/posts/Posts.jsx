import Post from '../components/Post/Post';
import './posts.scss'

const Posts = () => {

  const posts = [
    {
        id:1, 
        name:"Daniel Pena",
        userId: 1,
        profilePic:  "https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity.",
        img:  "https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    {
        id:2, 
        name:"Daniel Pena",
        userId: 1,
        profilePic:  "https://images.pexels.com/photos/6121164/pexels-photo-6121164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Description is any type of communication that aims to make vivid a place, object, person, group, or other physical entity.",
    },
];

  return <div className='posts'>
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>
}

export default Posts