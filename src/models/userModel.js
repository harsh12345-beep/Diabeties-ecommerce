const db = require("../config/db");

exports.findUserByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows.length > 0 ? rows[0] : null;
};

exports.createUser = async (name, email, hashedPassword) => {
  return db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
};