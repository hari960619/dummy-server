const express = require("express");
const {
  getProductById,
  postProduct,
  updateProductById,
  deleteProductById,
  getProducts,
} = require("../controllers/productController");
const router = express.Router();

router.route("/").get(getProducts).post(postProduct);
router
  .route("/:id")
  .get(getProductById)
  .patch(updateProductById)
  .delete(deleteProductById);

module.exports = router;
