const db = require("../config/db");

// ✅ Add item to cart
exports.addToCart = async (req, res) => {
    const { product_id, quantity } = req.body;
    const user_id = req.userId;

    try {
        await db.execute(
            "INSERT INTO Cart (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?",
            [user_id, product_id, quantity, quantity]
        );
        res.json({ message: "Item added to cart" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ View cart items
exports.viewCart = async (req, res) => {
    const user_id = req.userId;

    try {
        const [cartItems] = await db.execute(
            `SELECT Cart.id, Products.name, Products.price, Cart.quantity, 
            (Products.price * Cart.quantity) AS total_price 
            FROM Cart 
            JOIN Products ON Cart.product_id = Products.id 
            WHERE Cart.user_id = ?`,
            [user_id]
        );
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Update cart item quantity
exports.updateCartItem = async (req, res) => {
    const { item_id } = req.params;
    const { quantity } = req.body;
    const user_id = req.userId;

    try {
        await db.execute(
            "UPDATE Cart SET quantity = ? WHERE id = ? AND user_id = ?",
            [quantity, item_id, user_id]
        );
        res.json({ message: "Cart updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Remove item from cart
exports.removeCartItem = async (req, res) => {
    const { item_id } = req.params;
    const user_id = req.userId;

    try {
        await db.execute("DELETE FROM Cart WHERE id = ? AND user_id = ?", [
            item_id,
            user_id,
        ]);
        res.json({ message: "Item removed from cart" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Checkout (Clear cart)
exports.checkout = async (req, res) => {
    const user_id = req.userId;

    try {
        await db.execute("DELETE FROM Cart WHERE user_id = ?", [user_id]);
        res.json({ message: "Checkout successful. Cart cleared." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
