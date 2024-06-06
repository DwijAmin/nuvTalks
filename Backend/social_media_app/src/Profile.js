import "./Profile.css";
import Header from "./Header";
import SideRow from "./SideRow";
import Feed from "./Feed";
import { useEffect, useState } from "react";
import image from "./2.jpg";
import { useParams } from "react-router-dom";
import Post from "./Post";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectItems } from './Slices';
import { withAlert } from 'react-alert'

export default function Profile() {

  const [user, setuser] = useState([]);
  let name = useParams();
  let username = name.name;
  console.log(username)
  const [users, setUsers] = useState({});
  var retrievedObject = localStorage.getItem('user');

  var currentUser = JSON.parse(retrievedObject)
 // console.log(currentUser)
 //const currentUser = localStorage.getItem('user');
  console.log(currentUser +"jj")
  const [followed, setFollowed] = useState(
   
  );
  console.log(followed)
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/posts/profiles/${username}`);
      var a = JSON.stringify(res.data);
      var b = JSON.parse(a);
      console.log("userdata "+ b)
       setUsers(res.data);
       console.log("hii"+res.data)

    };
    fetchUser();
  }, [username]);
  console.log(users)
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/posts/profile/${username}`);
      console.log("hii"+res.data)
      setuser(res.data);

    };
    fetchUser();
  }, [username]);
  console.log("hii" + users)
  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`http://localhost:8800/api/user/${users._id}/unfollow`, {
          userId: currentUser._id,
        });
       // dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`http://localhost:8800/api/user/${users._id}/follow`, {
          userId: currentUser._id,
        });
      //  dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };
  const ProfileRightbar = () => {
    return (
      <>
        {users.name !== currentUser.name && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        </>
    )}

   
  return (
    <div>
      <Header />
      <div className="profile">

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={image} className="profileCoverImg" alt={"./BB.jpg"} />

              <img src={image} className="profileUserImg" alt={"./BB.jpg"} />

            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{username}</h4>

            </div>
          </div>
          <div className="profileRightBottom">


          </div>
       <div>
       {users ? <ProfileRightbar /> : <ProfileRightbar />}
       </div>
          <div className="post">
            {
              user.map((p) => (
                  
                <Post  post={p}> </Post>
              ))
            }

          </div>

        </div>
      </div>
      
    </div>
  );
}