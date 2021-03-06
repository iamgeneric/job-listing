const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 255,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    max: 1000,
    trim: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Job", jobSchema);