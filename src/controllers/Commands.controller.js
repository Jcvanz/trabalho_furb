const Command = require('../DAO/Command.dao');

const createCommand = async (req, res) => {
    try {
        const commandData = await Command.createCommand(req.body);
        res.status(201).json(commandData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCommands = async (req, res) => {
    try {
        const commands = await Command.getCommands();
        res.status(200).json(commands);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar comandas: ${error.message}` });
    }
}

const getCommandById = async (req, res) => {
    try {
        const command = await Command.getCommandById(req.params.id);
        if (!command) {
            return res.status(404).json({ error: 'comanda não encontrado' });
        }
        res.status(200).json(command);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar comanda: ${error.message}` });
    }
}

const updateCommand = async (req, res) => {
    try {
        const updatedCommand = await Command.updateCommand(req.params.id, req.body);
        if (!updatedCommand) {
            return res.status(404).json({ error: 'comanda não encontrado' });
        }
        res.status(200).json(updatedCommand);
    } catch (error) {
        res.status(500).json({ error: `Erro ao atualizar comanda: ${error.message}` });
    }
}

const deleteCommand = async (req, res) => {
    try {
        const deletedCommand = await Command.deleteCommand(req.params.id);
        if (!deletedCommand) {
            return res.status(404).json({ error: 'comanda não encontrado' });
        }
        res.status(200).json({ message: 'comanda deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: `Erro ao deletar comanda: ${error.message}` });
    }
}

module.exports = {
    createCommand,
    getCommands,
    getCommandById,
    updateCommand,
    deleteCommand
}