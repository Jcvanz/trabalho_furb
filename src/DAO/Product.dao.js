const Product = require('../models/Products.Model');

const createProduct = async (productData) => {
    try {
        return await Product.create(productData);
    } catch (error) {
        throw new Error(`Erro ao criar produto: ${error.message}`);
    }
};

const getProducts = async () => {
    try {
        return await Product.find();
    } catch (error) {
        throw new Error(`Erro ao listar produtos: ${error.message}`);
    }
};

const getProductById = async (productId) => {
    try {
        return await Product.findById(productId);
    } catch (error) {
        throw new Error(`Erro ao buscar produto especifico: ${error.message}`);
    }
}

const updateProduct = async (productId, updateData) => {
    try {
        return await Product.findByIdAndUpdate(productId, updateData, { new: true });
    } catch (error) {
        throw new Error(`Erro ao atualizar produto: ${error.message}`);
    }
}

const deleteProduct = async (productId) => {
    try {
        return await Product.findByIdAndDelete(productId);
    } catch (error) {
        throw new Error(`Erro ao deletar produto: ${error.message}`);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};