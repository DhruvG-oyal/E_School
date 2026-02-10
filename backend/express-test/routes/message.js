const express = require('express');

const router = express.Router();
const {protectRoute}=require('../middleware')
const {authMiddleware}=require('../middleware')

const {sendMessage}=require('../controllers/message.controller')
const {getMessages}=require('../controllers/message.controller')

router.get("/:id",protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage);


module.exports = router;
