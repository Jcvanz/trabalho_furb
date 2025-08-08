const Command = require('../models/Commands.model');

const createCommand = async (commandData) => {
    try {
        return await Command.create(commandData);
    } catch (error) {
        throw new Error(`Erro ao criar comanda: ${error.message}`);
    }
}

const getCommands = async () => {
    try {
        return await Command.find().populate('command').populate('commandProducts.products');
    } catch (error) {
        throw new Error(`Erro ao listar comandas: ${error.message}`);
    }
}

const getCommandById = async (commandId) => {
    try {
        return await Command.findById(commandId).populate('command').populate('commandProducts.products');
    } catch (error) {
        throw new Error(`Erro ao buscar comanda: ${error.message}`);
    }
}

const updateCommand = async (commandId, updateData) => {
    try {
        return await Command.findByIdAndUpdate(commandId, updateData, { new: true }).populate('command').populate('commandProducts.products');
    } catch (error) {
        throw new Error(`Erro ao atualizar comanda: ${error.message}`);
    }
}

const deleteCommand = async (commandId) => {
    try {
        return await Command.findByIdAndDelete(commandId);
    } catch (error) {
        throw new Error(`Erro ao deletar comanda: ${error.message}`);
    }
}

module.exports = {
    createCommand,
    getCommands,
    getCommandById,
    updateCommand,
    deleteCommand    
}