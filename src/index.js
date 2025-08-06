const express = require('express');
const connectDatabase = require('./config/database');

const productRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/users.routes');
const commandRoutes = require('./routes/command.routes');

require('dotenv').config();
connectDatabase();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/produtos', productRoutes);
app.use('/clientes', userRoutes);
app.use('/comanda', commandRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});