exports.requireAuth = (req, res, next) => {
  console.log("Session Data:", req.session);

  if (!req.session.userId) {
    return res.status(401).json({ error: "Unauthorized. Please log in." });
  }

  req.userId = req.session.userId; // Attach userId for further use
  next();
};
