const product = require("./product.model");
const productService = require("./product.service");

const productResolvers = {
  products: async () => {
    return productService.getAllProducts();
  },

  product: async ({ id }) => {
    return productService.getProducById(id);
  },

  productsByCategory: async ({ category }) => {
    return productService.getProductsByCategory(category);
  },

  createProduct: async ({ input }) => {
    return productService.createProduct(input);
  },

  updateProduct: async ({ id, input }) => {
    return productService.updateProduct(id, input);
  },

  deleteProduct: async ({ id }) => {
    return productService.deleteProduct(id);
  },
};

module.exports = productResolvers;
