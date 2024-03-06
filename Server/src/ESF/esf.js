const fs = require('fs-extra');
const path = require('path');
const pool = require('../db/conn');

const sqlDir = path.join(__dirname, '../sql');

const executeSqlFile = async (fileName) => {
    const filePath = path.join(sqlDir, fileName);
    const sql = await fs.readFile(filePath, 'utf-8');
    await pool.query(sql);
    console.log(`Executed SQL file: ${fileName}`);
};

const initDatabase = async () => {
    try {
        await executeSqlFile('user.sql');
        // await executeSqlFile('product.sql');
        // Execute other SQL files as needed
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
};

module.exports = {
    initDatabase
};