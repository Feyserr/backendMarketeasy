const database = require('../config/database');

database.connect();

//metodo pra pegar todos os produtos do banco

exports.getProducts = function(){
    return database.query('SELECT * FROM public.products');
};

// metodo para adicionar um produto novo 

exports.newProduct = async(req, res) =>{
    try{
        const {name, price, category} = req.body;
            await database.query(
                `INSERT INTO public.products (name, price, category) VALUES('${name}', '${price}', '${category}')`,
            );
            res.status(201).send({
                message: "Produto adicionado com sucesso !!"
            });

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            message:"erro inesperado"
        });
    }
};

// metodo para editar um produto ja existente

exports.editProducts = async(req, res)=>{
    const editarProducts = parseInt(req.params.id);
    const {name, price, category} = req.body;
    await database.query(
        `UPDATE public.products SET name = '${name}', price = '${price}', category = '${category}' WHERE id = ${editarProducts}`
    );
    res.status(201).send({
        message:"Protudo Editado !!"
    });

};

// metodo para deletar um produto 

exports.deleteProducts = async(req, res) =>{
    const deleteProducts = parseInt(req.query.id);
        await database.query(`DELETE FROM public.products WHERE id = ${deleteProducts}`);
    res.status(201).send({
        message:"Produto Deletado !!"
    });
}

exports.getProductsId = (req, res) => {
    const productsId = parseInt(req.params.id);
    return database.query(`SELECT * FROM public.products WHERE id = ${productsId}`);
    
}

