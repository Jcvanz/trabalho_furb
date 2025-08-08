const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const PORT = process.env.PORT || 3000;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Hamburgueria',
    version: '1.0.0',
    description: 'Documentação da API da Hamburgueria',
  },
  servers: [{ url: `http://localhost:${PORT}` }],
};

const options = {
  definition: swaggerDefinition,
  apis: [path.join(__dirname, '../routes/*.js')],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
