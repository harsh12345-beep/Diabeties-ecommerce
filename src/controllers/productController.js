const db = require('../config/db');

// Get all products
const getProducts = async (req, res) => {
    try {
        const [products] = await db.execute("SELECT * FROM products");
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const [product] = await db.execute("SELECT * FROM products WHERE ProductID = ?", [id]);
        if (product.length === 0) return res.status(404).json({ message: "Product not found" });
        res.json(product[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    const { name, description, price, discount, stockQuantity, categoryID, imageURL } = req.body;
    try {
        await db.execute(
            "INSERT INTO products (Name, Description, Price, Discount, StockQuantity, CategoryID, ImageURL) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [name, description, price, discount, stockQuantity, categoryID, imageURL]
        );
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, discount, stockQuantity, categoryID, imageURL } = req.body;
    try {
        await db.execute(
            "UPDATE products SET Name = ?, Description = ?, Price = ?, Discount = ?, StockQuantity = ?, CategoryID = ?, ImageURL = ? WHERE ProductID = ?",
            [name, description, price, discount, stockQuantity, categoryID, imageURL, id]
        );
        res.json({ message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await db.execute("DELETE FROM products WHERE ProductID = ?", [id]);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
