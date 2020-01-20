const express = require("express");
const router = express.Router();
const { getAll, getOne, addProduct,updateProduct,deleteProduct } = require("../controller/products");

router.post("/", addProduct);
router.get("/:_id", getOne);
router.put("/:_id", updateProduct);
router.get("/", getAll);
router.delete("/:_id", deleteProduct);

module.exports = router;
