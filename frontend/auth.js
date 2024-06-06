const router = require("express").Router();
const User = require("./User")
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const client = new OAuth2Client("292090500301-engvoneboso1ttiavq71luot2ce1k5og.apps.googleusercontent.com");




router.post("/register", (req, res) => {

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    try {
        user.save()
        res.send(user)

    }
    catch (err) {
        console.log(err)
    }


});


router.post("/Logins", (req, res) => {

    
    try {
        const user =  User.findOne({ name: req.body.name });
       // const posts = await Post.find({ userId: user._id });
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }


});

router.post("/Jwt",(req,res)=>{

})

router.post("/googlelogin", (req, res) => {
    // 



    try {
        const { tokenId } = req.body;

        client.verifyIdToken({ idToken: tokenId }).then(response => {
            const { name, email } = response.payload
            //res.send("hii" + email_verfied)
            console.log(response.payload)
            //  res.send(response.payload)
            if (name) {
                User.findOne({ email }).exec((err, user) => {
                    console.log(user)
                    if (err) {
                        console.log("err")
                    }
                    else {
                        if (user) {
                            const token = jwt.sign({ _id: user._id }, process.env.JWT_SIGNIN_KEY, { expiresIn: '3d' })
                            const { _id, name, email } = user;
                            res.json({
                                token,
                                user: { _id, name, email }
                            })
                        }
                        else {
                            let password = email + process.env.JWT_SIGNIN_KEY;
                            let newUser = new User({ name, email, password });
                            console.log(password)
                            newUser.save((data,err) => {
                                if(err){
                                    console.log("gggg")
                                }
                               else{
                                  
                                const token = jwt.sign({ _id: data._id }, process.env.JWT_SIGNIN_KEY, { expiresIn: '3d' })
                                const { _id, name, email } = newUser;
                                res.json({
                                    token,
                                    user: { name, email }
                                })
                            }
                            
                            })
                        
                        
                    }
                }
                })

            }
        })
    } catch (error) {
        if ((error, "Token used too early") !== false) {
            console.log(response.payload)
        }
    }

});

module.exports = router