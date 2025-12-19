const { buildSchema } = require("graphql");
const userTypeDefs = require("../modules/users/user.schema");
const productTypeDefs = require("../modules/products/product.schema");

const schema = buildSchema(`
    ${userTypeDefs}
    ${productTypeDefs}

    type Query{
    users:[User!]!
    user(id:ID!):User
    products:[Product!]!
    product(id:ID!):Product
    productsByCategory(category:String!):[Product!]!
    }

    type Mutation{
    createUser(input:CreateUserInput!):User!
    updateUser(id:ID!,input:UpdateUserInput!):User!
    deleteUser(id:ID!):DeleteResponse!

    createProduct(input:CreateProductInput!):Product!
    updateProduct(id:ID!,input:UpdateProductInput!):Product!
    deleteProduct(id:ID!):DeleteResponse!
    }

    `);

module.exports = schema;
