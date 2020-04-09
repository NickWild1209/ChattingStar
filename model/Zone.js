const mongoose = require("mongoose");

const schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  idCreator: {
    type: String
  },

  label: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  userLimit: {
    type: Number,
    default: 100
  }
});

module.exports = mongoose.model("zone", schema);
