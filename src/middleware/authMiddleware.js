const db = require("../config/db"); // Import MySQL connection

// Middleware to ensure the user is logged in
exports.requireAuth = (req, res, next) => {
  console.log("Session Data:", req.session);

  if (!req.session.userId) {
    return res.status(401).json({ error: "Unauthorized. Please log in." });
  }

  req.userId = req.session.userId; // Attach userId for further use
  next();
};

// Middleware to check if the logged-in user is an admin
exports.requireAdmin = async (req, res, next) => {
  if (!req.userId) {
    return res.status(401).json({ error: "Unauthorized. Please log in." });
  }

  try {
    // Get user role from database
    const [rows] = await db.execute("SELECT role FROM users WHERE id = ?", [req.userId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    if (rows[0].role !== "admin") {
      return res.status(403).json({ error: "Forbidden. Admin access required." });
    }

    next(); // User is admin, proceed
  } catch (error) {
    console.error("Admin check error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
