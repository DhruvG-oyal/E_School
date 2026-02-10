const express=require('express');
const { protectRoute } = require('../middleware');
const {getUsersForSidebar} =require('../controllers/alluser.controller')
const {authMiddleware}=require('../middleware');
const { User } = require("../db/usermodel");


const router=express.Router();

// const getUsersForSidebar = async (req, res) => {
//     try {
//         console.log(req.username);
//         const existingUser = await User.findOne({
//             username: req.username
//         })
//         if(existingUser)
//             {
//         const filteredUsers = await User.find({ username: { $ne: loggedInUserId } }).select("-password");
//         console.log(filteredUsers);
//         res.status(200).json(filteredUsers);
//       }
//     } catch (error) {
//         console.log("alluser fetch error", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// }

router.get("/",authMiddleware,async(req,res)=> {
    try {
        const loggedInUserId = req.username;
        const filteredUsers = await User.find({ username: { $ne: loggedInUserId } }).select("-password");
        console.log(filteredUsers);
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("alluser fetch error", error);
        res.status(500).json({ error: "Internal server error" });
    }
} );


module.exports=router;
