const mongoose = require("mongoose");

const AddressSchema = () => {
  mongoose.Schema({
    email: { type: String, require: true },
    country: { type: String, require: true },
    zipcode: { type: Number, require: true },
    address: { type: String, require: true },
    address2: { type: String },
    apartment_Suite_number: { type: String, require: true },
    town_city: { type: String, require: true },
    contact_number: { type: Number, require: true },
  });
};
const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
