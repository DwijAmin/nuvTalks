const router = require("express").Router();
const Question = require("./Question");
const nodemailer = require('nodemailer');


let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    // port: 2525,
    auth: {
        user: 'dwijamin99@gmail.com',
        pass: 'myshivbaba1999'
    }
});
router.post("/", async (req, res) => {
    const New_Question = new Question(req.body);
    try {
        const Save_Question = await New_Question.save();
        const message = {
            from: 'dwijamin99@gmail.com', // Sender address
            to: 'dwijamin99@yahoo.com',         // recipients
            subject: 'test mail from Nodejs', // Subject line
            text: 'Successfully! received mail using nodejs' // Plain text body
        };
        transport.sendMail(message, function (err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log('mail has sent.');
                console.log(info);
            }
        });
        res.status(200).json(Save_Question);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:userId", async (req, res) => {
    try {
        console.log(req.params.userId)
        const user = await Question.find({ userId: req.params.userId });
        // console.log(user)
        //  const users = await Question.find({ Answers: 'NA' });
        console.log(user)
        // const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        //   console.log(req.params.userId)
        // const user = await Question.findOne({ userId: req.params.userId });
        // console.log(user)
        const users = await Question.find({ Answers: 'NA' });
        console.log(users)
        // const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {

    // const Update_Question = await Question.findById(req.params.id);
    console.log(req.body)

    try {
        const user = await Question.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
      //  const update = await Question.updateOne({ $set: req.body });
       // const Update_Questions = await Question.findById(req.params.id);
        
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router