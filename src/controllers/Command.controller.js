const Command = require('../DAO/Command.dao');

const createCommand = async (req, res) => {
    try {
        const commandData = await Command.createCommand(req.body);
        res.status(201).json(commandData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const commands = await Command.getCommands();
        res.status(200).json(commands);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar comandos: ${error.message}` });
    }
}

const getCommandById = async (req, res) => {
    try {
        const command = await Command.getCommandById(req.params.id);
        if (!command) {
            return res.status(404).json({ error: 'Comando não encontrado' });
        }
        res.status(200).json(command);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar comando: ${error.message}` });
    }
}

const updateCommand = async (req, res) => {
    try {
        const updatedCommand = await Command.updateCommand(req.params.id, req.body);
        if (!updatedCommand) {
            return res.status(404).json({ error: 'Comando não encontrado' });
        }
        res.status(200).json(updatedCommand);
    } catch (error) {
        res.status(500).json({ error: `Erro ao atualizar comando: ${error.message}` });
    }
}

const deleteCommand = async (req, res) => {
    try {
        const deletedCommand = await Command.deleteCommand(req.params.id);
        if (!deletedCommand) {
            return res.status(404).json({ error: 'Comando não encontrado' });
        }
        res.status(200).json({ message: 'Comando deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: `Erro ao deletar comando: ${error.message}` });
    }
}

module.exports = {
    createCommand,
    getUsers,
    getCommandById,
    updateCommand,
    deleteCommand
}