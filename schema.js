import {
    GraphQLObjectType, GraphQLSchema, GraphQLInt
} from 'graphql';

let count = 0;

let schema = new GraphQLSchema({

    // difference between a mutation and a query is that mutations are processed serially,
    //  but queries make no such guarantee

    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: 'Updates count',
                resolve: ()=>{
                    count+=1;
                    return count;
                }
            }
        }
    }),
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                resolve: function () {
                    return count;
                }
            }
        }
    })
});

export default schema;