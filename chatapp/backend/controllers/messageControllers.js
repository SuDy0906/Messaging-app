const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const User = require("../models/userModel");
const Chat = require("../models/chatModel");

//@description     Get all Messages
//@route           GET /api/Message/:chatId
//@access          Protected
const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//@description     Create New Message
//@route           POST /api/Message/
//@access          Protected
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.status(400).json({ error: "Invalid data passed into request" });
  }

  try {
    // Check if the chat with the given ID exists
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ error: "Chat not found" });
    }

    const newMessage = {
      sender: req.user._id,
      content,
      chat: chatId,
    };

    // Create the message
    const message = await Message.create(newMessage);

    // Populate sender, chat, and chat.users fields
    await message
      .populate("sender", "name pic email")
      .populate("chat")
      .execPopulate();

    message.chat = await User.populate(message.chat, {
      path: "users",
      select: "name pic email",
    });

    // Update the latestMessage of the chat
    chat.latestMessage = message;
    await chat.save();

    res.json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the message" });
  }
});


module.exports = { allMessages, sendMessage };