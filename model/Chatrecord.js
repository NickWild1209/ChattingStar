const mongoose = require("mongoose");

const schema = mongoose.Schema({
  users: [],
  arrMsg: [schemaMsg]
});

const schemaMsg = mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now()
  },
  sender: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = mongoose.model("chatrecord", schema);
