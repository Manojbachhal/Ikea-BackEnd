const moongoose = require("mongoose");
const BeddingSchema = moongoose.Schema({
  name: { type: String, required: true },
  typeName: { type: String, required: true },
  ProductId: { type: Number, required: true },
  itemNoGlobal: { type: Number, required: true },
  contextualImageUrl: { type: String, required: true },
  salesPrice_numeral: { type: Number, required: true },
  salesPrice_prefix: { type: String, required: true },
  salesPrice_wholeNumber: { type: String, required: true },
});
const Bedding = moongoose.model("Bedding", BeddingSchema);
module.exports = Bedding;
