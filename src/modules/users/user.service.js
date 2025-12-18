const { use, useReducer } = require("react");
const User = require("./user.model");

class UserService {
  async getAllUsers() {
    return await User.findAll({
      order: [["createdAt", "DESC"]],
    });
  }

  async getUserById(id) {
    const user = await User.findByPk(id);

    if (!user) throw new Error("Usuario no encontrado");

    return user;
  }

  async createUser(userData) {
    try {
      return await User.create(userData);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new Error("El email  ya esta registrado");
      }
    }
    throw error;
  }

  async updateUser(id, userData) {
    const user = await User.findByPk(id);

    if (!user) throw new Error("Usuario no encontrado");

    await user.update(userData);
    return user;
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);

    if (!user) throw new Error("Usuario no encontrado");

    await user.destroy();

    return {
      success: true,
      message: "Usuario eliminado correctamente",
    };
  }
}

module.exports = new UserService();
