const router = require("express").Router();
const verify = require("./Token_check");


router.get("/", verify, (req, res) => {
  
      res.status(500).json('hi');
    
  });


module.exports = router;