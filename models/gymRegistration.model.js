const mongoose = require("mongoose");

const gymRegistrationSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
    },
    lastName: {
      type: String,
      required: [true, "lastName is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    mobile: {
      type: Number,
      required: [true, "mobile is required"],
    },
    weight: {
      type: Number,
      required: [true, "weight is required"],
    },
    height: {
      type: Number,
      required: [true, "height is required"],
    },
    bmi: {
      type: Number,
      required: [true, "bmi is required"],
    },
    bmiResult: {
      type: String,
      required: [true, "bmiResult is required"],
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
    },
    requireTrainer: {
      type: String,
      required: [true, "requireTrainer is required"],
    },
    package: {
      type: String,
      required: [true, "package is required"],
    },
    important: {
      type: [String],
      required: [true, "important is required"],
    },
    haveGymBefore: {
      type: String,
      required: [true, "haveGymBefore is required"],
    },
    enquiryDate: {
      type: String,
      required: [true, "enquiryDate is required"],
    },
  },
  {
    timestamps: true,
  }
);

const gymRegistration = mongoose.model(
  "gymRegistration",
  gymRegistrationSchema
);

module.exports = gymRegistration;
