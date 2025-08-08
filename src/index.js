const express = require('express');
const connectDatabase = require('./config/database');

require('dotenv').config();
connectDatabase();

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const productRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/users.routes');
const commandRoutes = require('./routes/commands.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api-docs.json', (_req, res) => res.json(swaggerSpec));
app.use('/api-docs', swaggerUi.serveFiles(swaggerSpec, {}), swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use('/produtos', productRoutes);
app.use('/clientes', userRoutes);
app.use('/comandas', commandRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});