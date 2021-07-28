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
})

router.put('/editProducts', async function(req, res){
    const editProduct = await productsService.editProducts(req, res);
    res.json(editProduct);
})

router.delete('/deleteProducts', async function(req, res){
    const deleteProduct = await productsService.deleteProduct(req, res);
    res.json(deleteProduct);
});

module.exports = router;