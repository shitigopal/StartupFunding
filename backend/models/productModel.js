const { Schema, model } = require("../connection");

const userSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true },
  features: Array,
  description: String,
  image: String,
  created_at: Date,
  updated_at: Date,
});


module.exports = model("product", userSchema);
