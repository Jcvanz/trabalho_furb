const Users = require('../DAO/Users.dao');

const createUser = async (req, res) => {
    try {
        const userData = await Users.createUser(req.body);
        res.status(201).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await Users.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar usuários: ${error.message}` });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await Users.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar usuário: ${error.message}` });
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = await Users.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: `Erro ao atualizar usuário: ${error.message}` });
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await Users.deleteUser(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: `Erro ao deletar usuário: ${error.message}` });
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};