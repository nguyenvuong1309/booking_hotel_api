

const User = require("../models/User.js");
var crypto = require("crypto");
const algorithm = "aes-256-cbc";

const key = "adnan-tech-programming-computers";
const iv = Buffer.from("d2a094145042a8f482c290a8100e6862", "hex"); //crypto.randomBytes(16);

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  console.log("🚀 ~ updateUser ~ body:", body);
  try {
    const fieldsToEncrypt = [
      "email",
      "name",
      "fullName",
      "Web3AddressWallet",
      "work",
      "education",
      "description",
      "image",
      "address",
    ];
    const encryptedBody = { ...body };
    // Encrypt specified fields if they exist in the request body
    fieldsToEncrypt.forEach((field) => {
      console.log("🚀 ~ fieldsToEncrypt.forEach ~ body[field]:", body[field]);
      if (encryptedBody[field]) {
        let cipher = crypto.createCipheriv(algorithm, key, iv);
        let encryptedField = cipher.update(
          encryptedBody[field],
          "utf-8",
          "hex"
        );
        encryptedField += cipher.final("hex");
        encryptedBody[field] = encryptedField;
        console.log(`🚀 ~ updateUser ~ encrypted ${field}:`, encryptedField);
      }
    });

    console.log("🚀 ~ updateUser ~ body:", encryptedBody);
    const user = await User.findOneAndUpdate({ _id: id }, encryptedBody);
    res.status(200).json(user);
  } catch (err) {
    console.log("🚀 ~ updateUser ~ err:", err);
    next(err);
  }
};



module.exports = {
    getUsers,
    getUserById,
    updateUser
}