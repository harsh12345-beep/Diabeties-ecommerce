const db = require("../config/db");

const createUser = async (name, email, hashedPassword) => {
  const query = "INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)";
  const [result] = await db.execute(query, [name, email, hashedPassword, "user"]);
  return result;
};

const findUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = ?";
  const [rows] = await db.execute(query, [email]);
  return rows;
};

const findUserById = async (id) => {
  const query = "SELECT id, name, email, role FROM users WHERE id = ?";
  const [rows] = await db.execute(query, [id]);
  return rows;
};

module.exports = { createUser, findUserByEmail, findUserById };
