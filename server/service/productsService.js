const productsData = require('../controllers/productsData');


//exports para as rotas

exports.getProducts = function(){
    return productsData.getProducts();
}

exports.newProduct = function(req, res){
    return productsData.newProduct(req, res);
}

exports.editProducts = function(req, res){
    return productsData.editProducts(req, res);
}

exports.deleteProducts = function(req, res){
    return productsData.deleteProducts(req, res);
}

exports.getProductsId = function(req, res){
    return productsData.getProductsId(req, res);
}