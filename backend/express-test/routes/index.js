require('dotenv').config();
const express = require('express');
const userRouter = require("./user");
const cardRouter=require("./cards");
const contentRouter=require("./content");
const messageRouter=require("./message");
const AllUsersRouter=require("./allusers")
const Comment=require("./comments")


const router = express.Router();

router.use("/user", userRouter);
router.use("/cards",cardRouter);
router.use("/content",contentRouter);
router.use("/message",messageRouter);
router.use("/allusers",AllUsersRouter);
router.use("/comment",Comment);

module.exports = router;