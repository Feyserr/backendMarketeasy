const express = require('express');
const router = express.Router();
const productsService = require('../service/productsService');

// rotas dos metodos 

router.get('/products', async function(req, res){
    const products = await productsService.getProducts();
    res.json(products);
});

router.post('/newProducts', async function(req, res){
    const newProduct = await productsService.newProduct(req, res);
    res.json(newProduct);
});

router.put('/products/:id', async function(req, res){
    const editProduct = await productsService.editProducts(req, res);
    res.json(editProduct);
});

router.delete('/products', async function(req, res){
    const deleteProduct = await productsService.deleteProducts(req, res);
    res.json(deleteProduct);
});

router.get('/products/:id'), async function(req, res){
    const productsId = await productsService.getProductsId(req, res);
    res.json(productsId);
}

module.exports = router;