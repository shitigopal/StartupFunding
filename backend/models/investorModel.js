const { Schema, model, Types } = require("../connection");


const userSchema = new Schema({
  
  description: String,
  user: {type : Types.ObjectId, ref: 'user'},
  coverimage: String,
  contact: Array,
  officeAddress: String,
  created_at: Date,
})


module.exports = model("investor", userSchema);
