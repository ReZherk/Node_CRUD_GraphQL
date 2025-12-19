const userTypeDefs = `
type User{

id:ID!
name:String!
email:String!
age:Int
active:Boolean!
createdAt:String!
updatedAt:String!

}


input CreateUserInput{

name:String!
email:String!
age:Int
active:Boolean


}

input UpdateUserInput{

name:String
email:String
age:Int
active:Boolean

}


type DeleteResponse{

success:Boolean!
message:String!

}

`;

module.exports = userTypeDefs;
