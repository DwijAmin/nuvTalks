
import React, { useState } from 'react'
import image from "./2.jpg";
import './Post.css';
import Button from '@material-ui/core/Button';
import { useEffect, useRef } from "react";
import axios from "axios";
import Profile from "./Profile"
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { useSelector } from "react-redux";
import { selectItems } from './Slices';
import { store } from './Store';

function Post({ post }) {
  const [username, setusername] = useState("");
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  //const [like, setLike] = useState(post.likes.length)
  
  const [user, setUser] = useState({});
  //const items = useSelector(selectItems)
  var retrievedObject = localStorage.getItem('user');

  var item = JSON.parse(retrievedObject)
 //const item = localStorage.getItem('user');
  console.log(item)

    

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/user/${post.userId}`);
      setUser(res.data);
      console.log(res.data)

    };
    fetchUser();
  }, [post.userId]);
  console.log(post._id)

  useEffect(() => {
    setIsLiked(post.likes.includes(item._id));
  }, [item._id, post.likes]);
  const likeHandler = () => {
    try {
      axios.put("http://localhost:8800/api/posts/" + post._id + "/like", { userId: item._id });
    } catch (err) { }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    console.log(isLiked)
  };

  return (
    <div className="posts">
      <div className="post_top">

        <Link to={`/Profile/${user.name}`}>  <h3>{user.name}</h3>   </Link>
      </div>
      <div className="post_message">
        <p> {post.desc}</p>
      </div>
      <br />
      <div className="post_image">
        <img className="postImg" src={"http://localhost:8800/images/"+post.img} alt="" />
      </div>
      <br />
      <div className="post_message">
        <Button style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "20px" }} variant="contained" color="primary"   onClick={likeHandler}>Like</Button>
        
        <span className="postLikeCounter">{like} people like it</span>
        <br></br>
        <TextField id="outlined-basic" label="Comments" variant="outlined" required fullWidth />

      </div>
    </div >
  )
}

export default Post
