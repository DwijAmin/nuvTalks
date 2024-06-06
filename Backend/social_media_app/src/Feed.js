import "./feed.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import {  useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectItems } from './Slices';
import { useEffect } from "react";

export default function Feed() {
 // const { user } = useContext();
 const users = useSelector(selectItems)
 var retrievedObject = localStorage.getItem('user');

 var user = JSON.parse(retrievedObject)
 //setuser(a);
 console.log(user)
// const user = users.item;
// console.log(user)
  const PF = "";
  const desc = useRef();
  const [file, setFile] = useState(null);
 
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log("hii");
      try {
        await axios.post("http://localhost:8800/api/upload", data);
      } catch (err) {
        console.log(err)
      }
    }
    try {
      await axios.post("http://localhost:8800/api/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err)
    }
  };

/*
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };
*/
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
         
          <input
            placeholder={"What's in your mind " }
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
           
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}