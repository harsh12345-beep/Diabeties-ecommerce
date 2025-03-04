const express = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/", requireAuth, cartController.addToCart);
router.get("/", requireAuth, cartController.viewCart);
router.put("/:item_id", requireAuth, cartController.updateCartItem);
router.delete("/:item_id", requireAuth, cartController.removeCartItem);
router.post("/checkout", requireAuth, cartController.checkout);

module.exports = router;
