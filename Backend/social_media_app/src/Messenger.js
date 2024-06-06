import "./Messenger.css";
import Topbar from "./Header";
import Msg from "./Msg";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Convarsation from "./Convarsation";

import { io } from "socket.io-client";

/*
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
*/

export default function Messenger() {
  const [conversations, setconversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef(io("ws://localhost:8900"))
  const scrollRef = useRef();
  var retrievedObject = localStorage.getItem('user');

    var a = JSON.parse(retrievedObject)
    console.log(a._id)
  const [user, setuser] = useState({
  })
  useEffect(() => {
    const get = async () => {
      const res = await axios.get("http://localhost:8800/api/user/" + a._id)
      console.log(res)
   //   setconversations(res.data);
      setuser(res.data);
    }
    get();
  }, [])
  console.log(user)
  useEffect(() => {

    const getcon = async () => {
      const res = await axios.get("http://localhost:8800/api/conversations/" + user._id)
      console.log(res)
      setconversations(res.data);
      setconversations(res.data);
    }
    getcon();
  }, [user._id])

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/Messages/" + currentChat?._id);
        console.log(res)
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  console.log(messages)
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
    
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
     console.log(users)
    });
  }, [user]);

     console.log(socket)
     useEffect(() => {
      arrivalMessage &&
        currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
      socket.current.on("getusers", userss=>{
        console.log(userss)
      })
     }, []);
     
  
  /*
   const [currentChat, setCurrentChat] = useState(null);
   const [messages, setMessages] = useState([]);
   const [newMessage, setNewMessage] = useState("");
   const [arrivalMessage, setArrivalMessage] = useState(null);
   const [onlineUsers, setOnlineUsers] = useState([]);
   const socket = useRef();
   const { user } = useContext(AuthContext);
 
   */
  /*
    useEffect(() => {
      socket.current = io("ws://localhost:8900");
      socket.current.on("getMessage", (data) => {
        setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        });
      });
    }, []);
  
   
    useEffect(() => {
      socket.current.emit("addUser", user._id);
      socket.current.on("getUsers", (users) => {
        setOnlineUsers(
          user.followings.filter((f) => users.some((u) => u.userId === f))
        );
      });
    }, [user]);
  
    useEffect(() => {
      const getConversations = async () => {
        try {
          const res = await axios.get("/conversations/" + user._id);
          setConversations(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getConversations();
    }, [user._id]);
  
    useEffect(() => {
      const getMessages = async () => {
        try {
          const res = await axios.get("/messages/" + currentChat?._id);
          setMessages(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMessages();
    }, [currentChat]);
  */
    const handleSubmit = async (e) => {
      const message = {
        sender: user._id,
        text: newMessage,
        conversationId: currentChat._id,
      };
  
      const receiverId = currentChat.members.find(
        (member) => member !== user._id
      );
  
      socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId ,
        text: newMessage,
      });
  /*
      const receiverId = currentChat.members.find(
        (member) => member !== user._id
      );
  
      socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId,
        text: newMessage,
      });
  */
      try {
        const res = await axios.post("http://localhost:8800/api/Messages", message);
        setMessages([...messages, res.data]);
        setNewMessage("");
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
   
  
 console.log(currentChat)
  return (
    <>

      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div onClick={()=>setCurrentChat(c)}>
                <Convarsation  conversatioon={c} currentUser={user}></Convarsation>
              </div>
            )
            )
            }



          </div>

        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef} >
                      <Msg message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                     onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit} >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}

          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
           
          </div>
        </div>
      </div>
    </>
  );
}