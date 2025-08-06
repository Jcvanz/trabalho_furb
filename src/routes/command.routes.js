const express = require('express');
const router = express.Router();
const CommandController = require('../controllers/Command.controller');

router.post('/', CommandController.createCommand);
router.get('/', CommandController.getUsers);
router.get('/:id', CommandController.getCommandById);
router.put('/:id', CommandController.updateCommand);
router.delete('/:id', CommandController.deleteCommand);

module.exports = router;