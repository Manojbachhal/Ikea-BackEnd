const Cart = require("../models/Cart.model");
const Bedding = require("../models/Bedding");
const Beds = require("../models/Beds");
const BedSideTable = require("../models//Bedsidetables");
const BookCase = require("../models/Bookcases");
const Furniture = require("../models/Furniture");
const Mattress = require("../models/Mattresses");
const Sofa = require("../models/Sofa");
const Tables = require("../models/Tables");
const UnderBedStorage = require("../models/UnderBedStorage");
const { verifyTOken } = require("./LoginController");

const getDataBedding = async (page, sort) => {
  let skipPage = (page - 1) * 10;
  // console.log("page" + " " + page);
  let total = await Bedding.find();
  let data = Bedding.find().skip(skipPage).limit(12);
  if (sort == "asc") {
    data = Bedding.find().sort({ salesPrice_numeral: 1 });
  } else {
    data = Bedding.find().sort({ salesPrice_numeral: -1 });
  }
  data = await data;
  return {
    data,
    totalPage: total.length,
  };
};

const getDataBeds = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  await Beds.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataBedSideTable = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await BedSideTable.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataBookCase = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  await BookCase.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataFurniture = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await Furniture.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataMattress = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await Mattress.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataSofa = async (page, sort) => {
  let skipPage = (page - 1) * 10;
  let totalPage = await Sofa.countDocuments();
  let SOfaData = Sofa.find().skip(skipPage).limit(12);

  // .sort({ salesPrice_numeral: -1 });
  if (sort == "asc") {
    // SOfaData = await Sofa.find()
    //   .skip(skipPage)
    //   .limit(12)
    //   .sort({ salesPrice_numeral: 1 });
    SOfaData = SOfaData.sort({ salesPrice_numeral: 1 });
    // console.log(SOfaData);
  } else if (sort == "dsc") {
    // SOfaData = await Sofa.find()
    //   .skip(skipPage)
    //   .limit(12)
    //   .sort({ salesPrice_numeral: -1 });
    SOfaData = SOfaData.sort({ salesPrice_numeral: -1 });
  }
  // ;
  // console.log(data);
  let data = await SOfaData;

  return {
    data,
    totalPage,
  };
};

const getDataTables = async (page, sort) => {
  let sortOrder = 0;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await Tables.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const getDataUnderBedStorage = async (page, sort) => {
  let sortOrder;
  if (sort == "asc") {
    sortOrder = 1;
  }
  if (sort == "dsc") {
    sortOrder = -1;
  }
  let skipPage = (page - 1) * 10;
  let data = await UnderBedStorage.find()
    .skip(skipPage)
    .limit(10)
    .sort({ salesPrice_numeral: sortOrder });
  return data;
};

const showCartData = async (data) => {
  console.log(data);
  let token = data.token;
  let user = verifyTOken(token);
  let email = user.email;
  let res = await Cart.find({ email });
  return res;
};

const createCartData = async (Data) => {
  let user = verifyTOken(Data.token);
  let email = user.email;
  Data.cartItem.email = email;
  let itemNoGlobal = Data.cartItem.itemNoGlobal;

  let data = await Cart.find({ email, itemNoGlobal });
  if (data.length > 0) {
    data = data[0];
    let res = await Cart.findOneAndUpdate(
      { email, itemNoGlobal },
      { quantity: +data.quantity + 1 }
    );
    res = await Cart.find({ email });
    return res;
  } else {
    Data.cartItem.quantity = 1;
    delete Data.cartItem._id;
    delete Data.cartItem.id;
    await Cart.create(Data.cartItem);

    let res = await Cart.find({ email });
    return res;
  }
};

const updateCartData = async (Data) => {
  let user = verifyTOken(Data.token);
  let email = user.email;
  Data.cartItem.email = email;
  let itemNoGlobal = Data.cartItem.itemNoGlobal;

  let data = await Cart.findOne({ email, itemNoGlobal });
  if (data.quantity == 1) {
    await Cart.findOneAndRemove({ email, itemNoGlobal });
    let res = await Cart.find({ email });
    return res;
  } else if (data) {
    let res = await Cart.findOneAndUpdate(
      { email, itemNoGlobal },
      { quantity: data.quantity - 1 }
    );
    res = await Cart.find({ email });
    // data.quantity += 1;
    return res;
  }
};

const removeproduct = async (Data) => {
  let user = verifyTOken(Data.token);
  let email = user.email;
  Data.cartItem.email = email;
  // console.log(Data.cartItem);
  let itemNoGlobal = Data.cartItem.itemNoGlobal;
  await Cart.findOneAndRemove({ email, itemNoGlobal });

  let res = await Cart.find({ email });
  return res;
};
const emptycart = async (data) => {
  let token = data.token;
  let user = verifyTOken(token);
  let email = user.email;
  let res = await Cart.deleteMany({ email });
  return res;
};

module.exports = {
  getDataBedSideTable,
  getDataBedding,
  getDataBeds,
  getDataBookCase,
  getDataFurniture,
  getDataMattress,
  getDataSofa,
  getDataTables,
  getDataUnderBedStorage,
  createCartData,
  showCartData,
  updateCartData,
  removeproduct,
  emptycart,
};
