const usersModel = require("../models/users");

class User {
  //2 Crear usuario con los datos recibidos
  static async create(req, res, next) {
    const { body } = req;
    try {
      const userCreated = await usersModel.create({
        name: body.name,
        password: body.password,
        roles_id: body.roles_id,
      });
      return res.status(201).json({
        message: `user ${userCreated.name} created`,
      });
    } catch (error) {
      return res.status(500).json({ message: "Error of user" });
    }
  }

  //Recibir todos los usuarios
  static async getAll(req, res) {
    try {
      const usuarios = await usersModel.findAll();
      res.status(200).json(usuarios);
    } catch {
      return res.status(500).json({ message: "users query error" });
    }
  }

  //Actualizar usuario
  static async updateUser(req, res, next) {
    try {
      const { body } = req;
      const userId = await req.params.id;
      const updateUser = await usersModel.update(
        { name: body.name, password: body.password },
        { where: { id: userId } }
      );
      res.status(200).json({ updateUser });
    } catch {
      return res.status(500).json({ message: "update error" });
    }
  }
  //Eliminar usuario
  static async deleteUser(req, res, next) {
    try {
      const userId = await req.params.id;
      await usersModel.destroy({
        where: {
          id: userId,
        },
      });
      return res.status(200).json({ message: "Delete user" });
    } catch {
      return res.status(500).json({ message: "Delete error" });
    }
  }
}

module.exports = User;
