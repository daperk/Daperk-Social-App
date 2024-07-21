import "./post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import SmsIcon from "@mui/icons-material/Sms";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

function Post({ post }) {
  // temporary!
  const [commentOpen, setCommentOpen] = useState(false)
  
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="user-info">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            12 likes
          </div>
          <div className="item" onClick={()=> setCommentOpen(!commentOpen)} >
            <SmsIcon /> 12 comments
          </div>
          <div className="item">
            <ShareIcon /> Share
          </div>
        </div>
       {commentOpen && <Comments/>}
      </div>
    </div>
  );
}

export default Post;
