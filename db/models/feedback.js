const mongoose = require("mongoose");

let FeedBackSchema = new mongoose.Schema(
  {
    UUID: { type: String },
    name: { type: String },
    username: { type: String, unique: true },
    channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Channel" }],
    metrics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Metric" }],
    conference: { type: mongoose.Schema.Types.ObjectId, ref: "Conference" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", FeedBackSchema, "feedbacks");

export default Feedback;
