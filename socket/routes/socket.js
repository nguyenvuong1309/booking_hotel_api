








const express = require('express');
const router = express.Router();
const socketController = require("../controller/socketController");



router.post('/api/register', socketController.register);
router.post('/api/login', socketController.login);

router.post("/api/conversation", socketController.createConversation);
router.get("/api/conversations/:userId", socketController.getConversationById);
router.post("/api/message", socketController.createMessage);
router.get("/api/message/:conversationId", socketController.getMessageById);
router.get("/api/users/:userId", socketController.getUserById);

module.exports = router;
