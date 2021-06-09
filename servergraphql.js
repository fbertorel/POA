var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
//const { createUser } = require('./db');
const index = require("./index");

 
var schema = buildSchema(`
    type User {
        id: ID!
        firstname: String
        lastname: String
        email: String!
        points: Int!
    }
    type Product {
        id: ID!
        name: String!
        description: String
        points: Int
        brand: String
    }
    type Exchange{
        id_exchange: ID!
        id_usuario_fk: Int!
        id_producto_fk: Int!
    }
    type Query {
        getAllUsers: [User]
        getAllProducts: [Product]
        user(token: Int!): User
        product(token: Int!): Product
        getPointsById(userId: Int!): String
        exchangeStory(userId: Int!): [Exchange]
    }
    type Mutation{
        exchange(usuario: ID!, producto: ID!): String
        createUser(firstname: String!, lastname: String!, email: String, points: Int!): String
        createProduct(name: String!, description: String, points: Int!, brand: String): String
        updateProduct(productId: ID!, name: String!, description: String, points: Int!, brand: String, productId: ID!): String
        deleteProduct(productId: ID!): String
    }
`);

var root = { 
    
    getAllUsers: () => index.selectAll("usuario"),
    getAllProducts: () => index.selectAll("producto"),
    user: (args) => index.selectById("usuario",args.token),         //devuelve usuario por ID
    product: (args) => index.selectById("producto", args.token),     //devuelve producto por ID
    exchange: (args) => index.exchangeProduct(args.usuario, args.producto),  
    createUser: (args) => index.createUser(args.firstname, args.lastname, args.email, args.points),
    createProduct: (args) => index.createProduct(args.name, args.description, args.points, args.brand),
    updateProduct: (args) => index.setProduct(args.productId, args.name, args.description, args.points, args.brand),
    deleteProduct: (args) => index.deleteProduct(args.productId),
    getPointsById: (args) => index.selectPointsUser(args.userId),
    exchangeStory: (args) => index.exchangeHistory(args.userId)
    
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));


