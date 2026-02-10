
// const express = require('express');
// const router = express.Router();
// const zod = require("zod");
// const{Admin}=require("../models/Adminmodel")

// const jwt = require("jsonwebtoken");
// const  { authMiddleware } = require("../middleware");
// const { JWT_SECRET } = require("../config");

// const signupBody = zod.object({
//     username: zod.string().email(),
// 	firstName: zod.string(),
// 	lastName: zod.string(),
// 	password: zod.string()
// })

// router.post("/signup", async (req, res) => {
//     const obj = signupBody.safeParse(req.body)
    
//     if (!obj.success) {
//         return res.status(411).json({
//             message: "Email already taken / Incorrect inputs"
//         })
//     }
//     const existingUser = await Admin.findOne({
//         username: req.body.username
//     })

//     if (existingUser) {
//         return res.status(411).json({
//             message: "Email already taken/Incorrect inputs"
//         })
//     }

//     const user = await Admin.create({
//         username: req.body.username,
//         password: req.body.password,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//     })
//     const userId = user._id;

//     const token = jwt.sign({
//         username: req.body.username,
//         userId:user._id
//     }, JWT_SECRET);

//     res.json({
//         message: "User created successfully",
//         token: token
//     })
// })

// const signinBody = zod.object({
//     username: zod.string().email(),
// 	password: zod.string()
// })

// router.post("/signin", async (req, res) => {
//     const user = await Admin.findOne({
//         username: req.body.username,
//         password: req.body.password
//     });

//     if (user) {
//         const token = jwt.sign({
//             username: req.body.username
//         }, JWT_SECRET);
  
//         res.json({
//             token: token
//         })
//         return;
//     } 
//     res.status(411).json({
//         message: "Error while logging in"
//     })
// })

// const updateBody = zod.object({
// 	password: zod.string().optional(),
//     firstName: zod.string().optional(),
//     lastName: zod.string().optional(),
// })

// router.put("/", authMiddleware, async (req, res) => {
//     const { success } = updateBody.safeParse(req.body)
//     if (!success) {
//         res.status(411).json({
//             message: "Error while updating information"
//         })
//     }

// 	await Admin.updateOne({ _id: req.userId }, req.body);

//     res.json({
//         message: "Updated successfully"
//     })
// })


// router.get("/session",authMiddleware,async(req,res)=>
// {
//     console.log(req.username);
//     const existingUser = await Admin.findOne({
//         username: req.username
//     })
//     if(existingUser){
//         return res.status(200).json({
//             username: existingUser.username,
//             firstName: existingUser.firstName,
//             lastName: existingUser.lastName,
//             user_id:existingUser._id
//         })
//     }
//     res.status(400).json({
//         message: 'Failed to fetch user',
//         status: false
//     })
// })
// module.exports = router;