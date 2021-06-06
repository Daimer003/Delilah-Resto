const modelProducts = require('../models/products');


class Products{
// Crear productos
  static async create(req, res){
      const {body} = req;
      try {
         const productsCreate = await modelProducts.create({
             name: body.name,
             price: body.price,
             img_url: body.img_url
        });
        return res.status(200).json({
          message: `Products ${productsCreate.name} created`
        }) 
      }catch(error){
        return res.status(500).json({
          message: "Error of Product"
        })
      }
  }


static async getAll(req, res){
    res.send(body);
}

}

module.exports = Products;