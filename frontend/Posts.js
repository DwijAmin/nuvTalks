const router = require("express").Router();
const User = require("./User")
const Post = require("./Post");


router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //update a post
  
  router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("the post has been updated");
      } else {
        res.status(403).json("you can update only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //delete a post
  
  router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //like / dislike a post
  
  router.put("/:id/like", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("The post has been liked");
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("The post has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //get a post
  
  router.get("/:id", async (req, res) => {
    try {
      console.log("jii")
      const post = await Post.findById(req.params.id);
      console.log(post)
      console.log(req.params.id)
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get timeline posts
  
  router.get("/timeline/all/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
    
      
      const userPosts = await Post.find({ userId: currentUser._id });
      console.log(userPosts)
      const friendPosts = await Promise.all(
        currentUser.following.map((friendId) => {
          console.log("hii")
          return Post.find({ userId: friendId });
        })
      );
      res.json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/timeline/allfrinds/:userId", async (req, res) => {
    try {
      const currentUser = await User.findById(req.params.userId);
   
      const friend = await Promise.all(
        currentUser.following.map((friendId) => {
          console.log(friendId)
          return User.findById(friendId);
        })
      );
      res.json(friend)
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get("/profile/:username", async (req, res) => {
    try {
      const user = await User.findOne({ name: req.params.username });
      const posts = await Post.find({ userId: user._id });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  router.get("/profiles/:username", async (req, res) => {
    try {
      const user = await User.findOne({ name: req.params.username });
     
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router