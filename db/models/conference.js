const mongoose = require("mongoose");

let ConferenceSchema = new mongoose.Schema(
  {
    UUID: { type: String },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    attendants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    schedule: { type: mongoose.Schema.Types.ObjectId, ref: "Schedule" },
  },
  {
    timestamps: true,
  }
);

const Conference = mongoose.model(
  "Conference",
  ConferenceSchema,
  "conferences"
);

export default Conference;
