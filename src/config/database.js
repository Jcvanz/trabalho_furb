const mongoose = require("mongoose");

require('dotenv').config();

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Database Conectado");
    } catch (error) {
        console.error("Erro ao conectar banco de dados:", error);
        process.exit(1);
    }
}

module.exports = connectDatabase;