const Product = require("./product.model");

class ProductService {
  async getAllProducts() {
    return await Product.findAll({
      order: [["createdAt", "DESC"]],
    });
  }

  async getProducById(id) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error("Producto no encontrado");
    return product;
  }

  async getProductsByCategory(category) {
    return await Product.findAll({
      where: { category },
      order: [["name", "ASC"]],
    });
  }

  async createProduct(productData) {
    return await Product.create(productData);
  }

  async updateProduct(id, productData) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error("Producto no encontrado");
    await Product.update(productData);

    return product;
  }

  async deleteProduct(id) {
    const product = await Product.findByPk(id);
    if (!product) throw new Error("Producto no encontrado");

    await product.destroy();

    return {
      success: true,
      message: "Producto eliminado correctamente",
    };
  }
}

module.exports = new ProductService();
