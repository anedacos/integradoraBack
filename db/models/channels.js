const mongoose = require("mongoose");

let ChannelSchema = new mongoose.Schema(
  {
    name: { type: String },
    direction: { type: String },
  },
  {
    timestamps: true,
  }
);

const Channel = mongoose.model("Channel", ChannelSchema, "channels");

export default Channel;
