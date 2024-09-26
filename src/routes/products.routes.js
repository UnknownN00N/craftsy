const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get('/',productsController.list) // -> /products
router.get('/:products_id',productsController.list) // -> /products/:parámetro



module.exports = router;
