import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import "./conversation.css"

function Convarsation({ conversatioon, currentUser }) {
/*  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversatioon.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:8800/api/user/" + friendId);
        setUser(res.data);
        console.log(user)
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversatioon, currentUser]);
  
  return (
    <div>
        <div className="conversation">
   
     
   <span className="conversationName"></span>
 </div>
    </div>
  )
}
*/
const [user, setUser] = useState(null);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

useEffect(() => {
  const friendId = conversatioon.members.find((m) => m !== currentUser._id);

  const getUser = async () => {
    try {
      const res = await axios("http://localhost:8800/api/user/" + friendId);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getUser();
}, [currentUser, conversatioon]);

return (
  <div className="conversation">
   
    <span className="conversationName">{user?.username}</span>
  </div>
);
}

export default Convarsation
