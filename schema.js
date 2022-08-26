const graphql = require("graphql");


const { GraphQLString, GraphQLObjectType, GraphQLInt } = graphql;


const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },

});

// Like the data's entry point
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: {id: { type: GraphQLString } },
            resolve(parentValue, args) {
            },
        }
    }
})