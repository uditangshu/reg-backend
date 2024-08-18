const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
  },
  personalEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  instituteEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  otherQueries: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true, 
});

const Registration = mongoose.model("Registration",registrationSchema);

module.exports = Registration;
