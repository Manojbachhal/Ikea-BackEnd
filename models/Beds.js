const moongoose = require("mongoose");
const BedsSchema = moongoose.Schema({
  name: { type: String, required: true },
  typeName: { type: String, required: true },
  ProductId: { type: Number, required: true },
  itemNoGlobal: { type: Number, required: true },
  contextualImageUrl: { type: String, required: true },
  salesPrice_numeral: { type: Number, required: true },
  salesPrice_prefix: { type: String, required: true },
  salesPrice_wholeNumber: { type: String, required: true },
});
const Bed = moongoose.model("Bed", BedsSchema);
module.exports = Bed;
