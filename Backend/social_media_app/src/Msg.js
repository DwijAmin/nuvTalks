import "./Msg.css";
import { format } from "timeago.js";

export default function Msg({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
    <div className="messageTop">
      
      <p className="messageText">{message.text}</p>
    </div>
   </div>
);
}