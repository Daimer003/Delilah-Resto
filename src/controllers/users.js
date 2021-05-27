const usersModel = require('../models/users');

class User {
    static async create(req, res, next) {
        // 1 Optener los datos
       const {body} = req;
       
       try {
       //2 Crear usuario connlos datos recibidos 
        const userCreated = await usersModel.create({
            name: body.name,
            password: body.password,
            roles_id: body.roles_id
        });
        //3 Enviar menjade de usuario creado
        return res.status(201).json({
            message: `user ${userCreated.name} created`
        })
        //4 Si no enviar error    
       } catch (error) {
           return res.status(500).json({message: 'Error of user'});
       }
     
    }

    //Recibir todos los usuarios 
    static async getAll(req, res) {
        // 1 Optener los datos
    
       const usuarios = await usersModel.findAll()
       res.status(200).json(usuarios);
    }

    //Actualizar usuario
    static async updateUser(req, res, next) {
        // 1 Optener id del usuario
        const {body} = req;
        const userId = await req.params.id
        const updateUser = await usersModel.update({ name: body.name, password: body.password }, {where: {id: userId}})
         res.status(200).json({updateUser});
       

    }

    static async deleteUser(req, res, next) {
        // 1 Optener id del usuario
        const userId = await req.params.id
        await usersModel.destroy({
            where: {
              id: userId,
            }
          });

    }
   
}


module.exports = User;