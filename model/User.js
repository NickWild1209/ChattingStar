const mongoose = require("mongoose");

const schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    required: true,
    default: 25,
  },
  gender: {
    type: Number,
    required: true,
    default: 0,
  },
  logo: {
    type: String,
    default: "",
  },

  lastseen: {
    type: Date,
    default: Date.now(),
  },
  timespent: {
    type: Number,
    default: 0,
  },

  arrConnUser: {
    type: Array,
    default: [],
  },

  membership: {
    type: Number,
    default: 0,
  },
  arrImage: {
    type: Array,
  },
  sound: {
    type: String,
  },
  email: {
    type: String,
    default: "",
  },

  phone: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("user", schema);
