//General imports
const { gql } = require("apollo-server-express")

// Define modular extensions to the graphql schema
const typeDefs = gql`
    extend type Query {
        randomNumber(
            lowerBound: Int! 
            upperBound: Int!
        ): Int
    }
`
// Define resolvers for the above extensions to the graphql schema
const resolvers = {
    Query: {
        randomNumber: (_, args) => {
            const { lowerBound, upperBound } = args
            const boundDif = upperBound - lowerBound
            const randInt = Math.floor(Math.random() * boundDif + lowerBound)
            return randInt
        }
    }
}
// Package graphql schema (typeDefs), and resolvers as graphql schema module
// imported by ../server.js to build the apollo server
const graphqlModule = { typeDefs, resolvers }

// Exports
module.exports = {
    graphqlModule: graphqlModule
}