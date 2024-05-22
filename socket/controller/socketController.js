



const Users = require("../../models/User");
const Conversations = require('../models/Conversations');
const Messages = require('../models/Messages');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var crypto = require("crypto");

const algorithm = "aes-256-cbc";

const key = "adnan-tech-programing-computers";
const iv = Buffer.from("d2a094145042a8f482c290a8100e6862", "hex"); //crypto.randomBytes(16);

const register = async (req, res, next) => {
  try {
    const { token, fullName, email, password } = req.body;
    try {
      // Sending secret key and response token to Google Recaptcha API for authentication.
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=6Lf7gOQpAAAAAAAMqeicyrjpC0eKBBTPa2cC0Aqs&response=${token}`
      );

      // Check response status and send back to the client-side
      if (response.data.success) {
        const userDoc = await User.findOne({ email });
        const passOk = bcryptjs.compareSync(password, userDoc.password);
        if (passOk) {
          if (!fullName || !email || !password) {
            res.status(400).send("Please fill all required fields");
          } else {
            const isAlreadyExist = await Users.findOne({ email });
            if (isAlreadyExist) {
              res.status(400).send("User already exists");
            } else {
              const cipher = crypto.createCipheriv(algorithm, key, iv);

              let encryptFullName = cipher.update(fullName, "utf-8", "hex");
              encryptFullName += cipher.final("hex");

              let encryptEmail = cipher.update(email, "utf-8", "hex");
              encryptEmail += cipher.final("hex");

              const base64Data = Buffer.from("iv", "binary").toString("base64");
              const newUser = new Users({
                encryptFullName,
                encryptEmail,
                base64Data,
              });

              bcryptjs.hash(password, 10, (err, hashedPassword) => {
                newUser.set("password", hashedPassword);
                newUser.save();
                next();
              });
              return res.status(200).send("User registered successfully");
            }
          }
        }
      } else {
        //res.send("Robot 🤖");
        res.status(422).json("not found");
      }
    } catch (error) {
      // Handle any errors that occur during the reCAPTCHA verification process
      console.error(error);
      res.status(500).send("Error verifying reCAPTCHA");
    }
  } catch (error) {
    console.log(error, "Error");
  }
};


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).send('Please fill all required fields');
        } else {
            const user = await Users.findOne({ email });
            if (!user) {
                res.status(400).send('User email or password is incorrect');
            } else {
                const validateUser = await bcryptjs.compare(password, user.password);
                if (!validateUser) {
                    res.status(400).send('User email or password is incorrect');
                } else {
                    const payload = {
                        userId: user._id,
                        email: user.email
                    }
                    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_A_JWT_SECRET_KEY';

                    jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 84600 }, async (err, token) => {
                        await Users.updateOne({ _id: user._id }, {
                            $set: { token }
                        })
                        user.save();
                        return res.status(200).json({ user: { id: user._id, email: user.email, fullName: user.fullName }, token: token })
                    })
                }
            }
        }

    } catch (error) {
        console.log(error, 'Error')
    }
}

const createConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;
        const newCoversation = new Conversations({ members: [senderId, receiverId] });
        await newCoversation.save();
        res.status(200).send('Conversation created successfully');
    } catch (error) {
        console.log(error, 'Error')
    }
}

const getConversationById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const conversations = await Conversations.find({ members: { $in: [userId] } });
        const conversationUserData = Promise.all(conversations.map(async (conversation) => {
            const receiverId = conversation.members.find((member) => member !== userId);
            const user = await Users.findById(receiverId);
            return { user: { receiverId: user._id, email: user.email, fullName: user.fullName }, conversationId: conversation._id }
        }))
        res.status(200).json(await conversationUserData);
    } catch (error) {
        console.log(error, 'Error')
    }
}

const createMessage = async (req, res) => {
    try {
        const { conversationId, senderId, message, receiverId = '' } = req.body;
        if (!senderId || !message) return res.status(400).send('Please fill all required fields')
        if (conversationId === 'new' && receiverId) {
            const newCoversation = new Conversations({ members: [senderId, receiverId] });
            await newCoversation.save();
            const newMessage = new Messages({ conversationId: newCoversation._id, senderId, message });
            await newMessage.save();
            return res.status(200).send('Message sent successfully');
        } else if (!conversationId && !receiverId) {
            return res.status(400).send('Please fill all required fields')
        }
        const newMessage = new Messages({ conversationId, senderId, message });
        await newMessage.save();
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.log(error, 'Error')
    }
}

const getMessageById = async (req, res) => {
    try {
        const checkMessages = async (conversationId) => {
            console.log(conversationId, 'conversationId')
            const messages = await Messages.find({ conversationId });
            const messageUserData = Promise.all(messages.map(async (message) => {
                const user = await Users.findById(message.senderId);
                console.log("🚀 ~ file: socketController.js:131 ~ messageUserData ~ user:", user.fullName)
                return { user: { id: user._id, email: user.email, fullName: user.fullName }, message: message.message }
            }));
            res.status(200).json(await messageUserData);
        }
        const conversationId = req.params.conversationId;
        if (conversationId === 'new') {
            const checkConversation = await Conversations.find({ members: { $all: [req.query.senderId, req.query.receiverId] } });
            if (checkConversation.length > 0) {
                checkMessages(checkConversation[0]._id);
            } else {
                return res.status(200).json([])
            }
        } else {
            checkMessages(conversationId);
        }
    } catch (error) {
        console.log('Error', error)
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const users = await Users.find({ _id: { $ne: userId } });
        const usersData = Promise.all(users.map(async (user) => {
            return { user: { email: user.email, fullName: user.fullName, receiverId: user._id } }
        }))
        res.status(200).json(await usersData);
    } catch (error) {
        console.log('Error', error)
    }
}



module.exports = {
    register,
    login,
    createConversation,
    getConversationById,
    createMessage,
    getMessageById,
    getUserById
}