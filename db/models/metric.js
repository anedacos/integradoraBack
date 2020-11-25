const mongoose = require("mongoose");

let MetricSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String, unique: true },
    value: { type: String },
  },
  {
    timestamps: true,
  }
);

const Metric = mongoose.model("Metric", MetricSchema, "metrics");

export default Metric;
