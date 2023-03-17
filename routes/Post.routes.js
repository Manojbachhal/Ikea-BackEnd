const express = require("express");

const {
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
} = require("../middlewares/PostController");

const router = express.Router();

router.get("/bedding", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataBedding(page, sort);
  // console.log(data.length);
  res.send({
    data,
  });
});

router.get("/beds", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataBeds(page, sort);
  res.send({
    data,
  });
});

router.get("/bed-side-table", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataBedSideTable(page, sort);
  res.send({
    data,
  });
});

router.get("/bookcase", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataBookCase(page, sort);
  res.send({
    data,
  });
});

router.get("/furniture", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataFurniture(page, sort);
  res.send({
    data,
  });
});

router.get("/mattress", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataMattress(page, sort);
  res.send({
    data,
  });
});

router.get("/sofa", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataSofa(page, sort);
  res.send({
    data,
  });
});

router.get("/table", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataTables(page, sort);
  res.send({
    data,
  });
});

router.get("/underbed-storage", async (req, res) => {
  let { page, sort } = req.query;
  if (!sort) {
    sort = "";
  }
  let data = await getDataUnderBedStorage(page, sort);
  res.send({
    data,
  });
});

router.post("/cart/add", async (req, res) => {
  let data = req.body;
  // console.log(data);
  let response = await createCartData(data);
  res.send(response);
});

router.post("/cart/view", async (req, res) => {
  let data = req.body;
  let response = await showCartData(data);
  res.send(response);
});

router.post("/cart/remove", async (req, res) => {
  let data = req.body;
  let response = await updateCartData(data);
  res.send(response);
});
router.post("/cart/remove-product", async (req, res) => {
  let data = req.body;
  let response = await removeproduct(data);
  res.send(response);
});

router.post("/cart/empty-cart", async (req, res) => {
  let data = req.body;
  let response = await emptycart(data);
  res.send(response);
});

module.exports = router;
