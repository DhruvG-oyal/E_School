 const {Conversation}=require('../models/coversation.model')
const {Message}=require('../models/message.model')
const mongoose = require('mongoose');
const { getReceiverSocketId,io}=require('../Socket/socket');


const getMessages=async(req,res)=>{
    try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages");

		if (!conversation) return res.status(200).json([]);
		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}

const sendMessage = async (req, res) => {
	try {
	  const { message } = req.body;
	  const receiverId = req.params.id; 
	  const senderId = req.user._id;
  
	  console.log(`Sender ID: ${senderId}`);
	  console.log(`Receiver ID: ${receiverId}`);
	  if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
		return res.status(400).json({ error: 'Invalid sender or receiver ID' });
	  }
	  let conversation = await Conversation.findOne({
		participants: { $all: [senderId, receiverId] },
	  });
  
	  if (!conversation) {
		conversation = await Conversation.create({
		  participants: [senderId, receiverId],
		});
	  }
	  const newMessage = new Message({
		senderId,
		receiverId,
		message,
	  });
  
	  conversation.messages.push(newMessage._id);
	  await Promise.all([conversation.save(), newMessage.save()]);
	  const receiverSocketId = getReceiverSocketId(receiverId);
  
	  if (receiverSocketId) {
		io.to(receiverSocketId).emit("newMessage", newMessage);
	  } else {
		console.log("Receiver is offline, message saved but not notified.");
	  }
	  return res.status(201).json(newMessage);
	} catch (error) {
	  console.error('Error creating message:', error);
	  return res.status(500).json({ error: 'Internal server error' });
	}
  };
  
  


module.exports=({
    sendMessage,getMessages
})



