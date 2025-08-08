const express = require('express');
const router = express.Router();
const CommandController = require('../controllers/Commands.controller');

/**
 * @swagger
 * tags:
 *   name: Comandas
 *   description: API para gerenciamento de comandas
 */

/**
 * @swagger
 * /comandas:
 *   get:
 *     tags: [Comandas]
 *     summary: Lista todas as comandas
 *     responses:
 *       200:
 *         description: Lista de comandas
 */
router.get('/', CommandController.getCommands);

/**
 * @swagger
 * /comandas:
 *   post:
 *     tags: [Comandas]
 *     summary: Cria uma comanda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *               produtos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     produto: { type: string }
 *                     quantidade: { type: integer }
 *               status:
 *                 type: string
 *                 enum: [aberta, finalizada, cancelada]
 *     responses:
 *       201: { description: Criado }
 */
router.post('/', CommandController.createCommand);

/**
 * @swagger
 * /comandas/{id}:
 *   get:
 *     tags: [Comandas]
 *     summary: Busca comanda por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: string }
 *         required: true
 *     responses:
 *       200: { description: OK }
 *       404: { description: Não encontrada }
 */
router.get('/:id', CommandController.getCommandById);

/**
 * @swagger
 * /comandas/{id}:
 *   put:
 *     tags: [Comandas]
 *     summary: Atualiza comanda por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: string }
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     produto: { type: string }
 *                     quantidade: { type: integer }
 *               status:
 *                 type: string
 *                 enum: [aberta, finalizada, cancelada]
 *     responses:
 *       200: { description: OK }
 *       404: { description: Não encontrada }
 */
router.put('/:id', CommandController.updateCommand);

/**
 * @swagger
 * /comandas/{id}:
 *   delete:
 *     tags: [Comandas]
 *     summary: Remove comanda por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: string }
 *         required: true
 *     responses:
 *       204: { description: Removida }
 *       404: { description: Não encontrada }
 */
router.delete('/:id', CommandController.deleteCommand);

module.exports = router;
