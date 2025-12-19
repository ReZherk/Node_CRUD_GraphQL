const userService = require("./user.service");

const userResolvers = {
  users: async () => {
    return await userService.getAllUsers();
  },

  user: async ({ id }) => {
    return await userService.getUserById(id);
  },

  createUser: async ({ input }) => {
    return await userService.createUser(input);
  },

  updateUser: async ({ id, input }) => {
    return await userService.updateUser(id, input);
  },

  deleteUser: async ({ id }) => {
    return await userService.deleteUser(id);
  },
};

module.exports = userResolvers;
