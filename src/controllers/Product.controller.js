const Product = require('../DAO/Product.dao');

const createProduct = async (req, res) => {
    try {
        const productData = await Product.createProduct(req.body);
        res.status(201).json(productData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar produtos: ${error.message}` });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: `Erro ao buscar produto: ${error.message}` });
    }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.updateProduct(req.params.id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ error: `Erro ao atualizar produto: ${error.message}` });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.deleteProduct(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: `Erro ao deletar produto: ${error.message}` });
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};