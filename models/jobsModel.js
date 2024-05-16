const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is requited!"],
    },
    type: {
      type: String,
      required: [true, "Type is requited!"],
    },
    description: {
      type: String,
      default: "empty",
      required: [true, "Description is requited!"],
    },
    location: {
      type: String,
      default: "empty",
    },
    salary: {
      type: String,
      default: "empty",
    },
    company: [
      {
        name: {
          type: String,
          default: "empty",
        },
        description: {
          type: String,
          default: "empty",
        },
        contactEmail: {
          type: String,
          default: "empty",
        },
        contactPhone: {
          type: String,
          default: "empty",
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", noteSchema);

module.exports = Job;
