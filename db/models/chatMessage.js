const mongoose = require("mongoose");

let ChatMessageSchema = new mongoose.Schema(
  {
    UUID: { type: String },
    name: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
    roles: [[String]],
    email: { type: String, unique: true },
    verificationCode: { type: String },
    verifiedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

mongoose.model("ChatMessage", ChatMessageSchema, "chatmessages");
