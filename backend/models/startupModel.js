const { Schema, model, Types } = require("../connection");
const bcrypt = require("bcrypt");
const SALT = 10;

const userSchema = new Schema({
  name: String,
  nature: String,
  industry: String,
  sector: String,
  inCorpNum: String,
  description: String,
  timeline: String,
  representative: {type : Types.ObjectId, ref: 'user'},
  funding: Number,
  coverimage: String,
  contact: Array,
  officeAddress: String,
  director: [{type : Types.ObjectId, ref: 'user'}],
  created_at: Date,
})


module.exports = model("startup", userSchema);
