const {initDatabase} =require('../ESF/esf')


const pool = require('../db/conn');
initDatabase()
  .then(() => {
    console.log("Database initialized successfully");
  })
  .catch((error) => {
    console.error("Error initializing database:", error);
    process.exit(1);
  });

const createUser = async (userData) => {
    const { username, email, password } = userData;
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [username, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = { createUser };
