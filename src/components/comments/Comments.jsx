import { useContext } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'


function Comments() {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            desc: "This is a comment made for a test example it is a fake comment",
            name: "Laura Madriz",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            desc: "This is another comment made for a test example it is a fake comment",
            name: "Jack Perez",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='Write a comment' />
            <button>Send</button>
        </div>
        {comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className='info'>
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">
                    1 min ago.
                </span>
            </div>
        ))}
    </div>
  )
}

export default Comments