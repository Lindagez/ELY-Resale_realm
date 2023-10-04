const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();
const auth = require("../middlewares/auth");
const {  getItems, getItemById, addItem, editItem, deleteItem } = require("../controllers/productController");
app.use(cors());
// using the APIs
router.post("/api/products/add", auth, addItem);
router.put("/api/products/edit/:id", auth, editItem);
router.delete("/api/products/delete/:id", auth, deleteItem);
router.get("/api/products/", getItems);
router.get("/api/products/:id", getItemById);

module.exports = router;
