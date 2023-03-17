const moongoose = require("mongoose");
const CartSchema = moongoose.Schema({
  name: { type: String, required: true },
  typeName: { type: String, required: true },
  email: { type: String, required: true },
  mainImageUrl: { type: String, required: true },
  itemNoGlobal: { type: Number, required: true },
  salesPrice_numeral: { type: Number, required: true },
  salesPrice_prefix: { type: String, required: true },
  salesPrice_wholeNumber: { type: String, required: true },
  contextualImageUrl: { type: String, required: true },
  mainImageAlt: { type: String, required: true },
  quantity: { type: Number, require: true },
});
const Cart = moongoose.model("Cart", CartSchema);
module.exports = Cart;
