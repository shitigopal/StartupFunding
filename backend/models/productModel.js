const { Schema, model } = require("../connection");

const productSchema = new Schema({
  productimage: { type: String },//image of startup product
  productvideo: { type: String },
  productname: { type: String },//Name of the product
  productdescription: { type: String },//Description of the product 
});
module.exports = model("product", productSchema);
