const mongoose = require("mongoose");

let UserChannelSchema = new mongoose.Schema(
  {
    channel: { type: mongoose.Schema.Types.ObjectId, ref: "Channel" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const UserChannel = mongoose.model(
  "UserChannel",
  UserChannelSchema,
  "userchannels"
);

export default UserChannel;
