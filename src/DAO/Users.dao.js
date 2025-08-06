const Users = require('../models/Users.model');

const createUser = async (userData) => {
    try {
        return await Users.create(userData);
    } catch (error) {
        throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
}

const getUsers = async () => {
    try {
        return await Users.find();
    } catch (error) {
        throw new Error(`Erro ao listar usuários: ${error.message}`);
    }
}

const getUserById = async (userId) => {
    try {
        return await Users.findById(userId);
    } catch (error) {
        throw new Error(`Erro ao buscar usuário específico: ${error.message}`);
    }
}

const updateUser = async (userId, updateData) => {
    try {
        return await Users.findByIdAndUpdate(userId, updateData, { new: true });
    } catch (error) {
        throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
}

const deleteUser = async (userId) => {
    try {
        return await Users.findByIdAndDelete(userId);
    } catch (error) {
        throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}