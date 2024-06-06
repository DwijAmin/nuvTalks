import "./messages.css";
import { format } from "timeago.js";

export default function Messages({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
       
        <p className="messageText">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>

        
      </div>
      <div className="messageBottom">1 hourse ago</div>
    </div>
  );
}