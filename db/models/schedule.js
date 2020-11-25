const mongoose = require("mongoose");

let ScheduleSchema = new mongoose.Schema(
  {
    init: { type: Date },
    last: { type: Date },
    dateRepeat: [{ Date }],
  },
  {
    timestamps: true,
  }
);

const Schedule = mongoose.model("Schedule", ScheduleSchema, "schedules");

export default Schedule;
