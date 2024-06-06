const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotmet = require("dotenv");
//const morgan = require("mor")
const Admin_Question = require("./Admin_Question");
const morgan = require("morgan");
const multer = require("multer");
const Questions = require("./Questions");
const path = require("path");
const Messages = require("./Messages")
const userRoute = require("./Users");
const authroute = require("./auth");
const Posts = require("./Posts");
const verify = require("./Token_check");
const conversations = require("./conversations")
dotmet.config();

mongoose.connect(process.env.Mongo_url,{useNewUrlParser: true},()=>{
    console.log("backend_connected")
});
app.use(express.json());
var cors = require('cors')

app.use(cors())
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log("hello")
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });
app.use("/api/user", userRoute)
app.use("/api/auth", authroute)
app.use("/api/Messages",Messages)
app.use("/api/posts", Posts)
app.use("/api/conversations", conversations)
app.use("/api/Questions", Questions);
app.use("/api/Admin_Question",Admin_Question)
app.listen(8800,()=>{
    console.log("backend")
})