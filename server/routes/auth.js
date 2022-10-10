const router = require("express").Router();
const User = require("../models/User");
const cryptoJS = require("crypto-js");

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err) {
        res.status(500).json(err);
    }
});

// router.get('/usertest', (req,res) => {
//     res.send("user test is successful");
// });

module.exports = router;