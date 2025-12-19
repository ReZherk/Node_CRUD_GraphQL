const productTypeDefs = `

type Product{

id:ID!
name:String!
description:String!
price:Float!
stock:Int!
category:String!
available:Boolean!
createdAt:String!
updatedAt:String!

}

input CreateProductInput{

name:String!
description:String
price:Float!
stock:Int!
category:String!
available:Boolean
}

input UpdateProductInput{
name:String
description:String
price:Float
stock:Int
category:String
available:Boolean

}

`;

module.exports = productTypeDefs;
