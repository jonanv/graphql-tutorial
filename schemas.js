// Construct a schema, using GraphQL schema language
const typeDefs = `
    type Author {
        id: String
        age: Int
        name: String
        books: [String]
    }
    type Query {
        authors: [Author]
        author(id: String): Author
    }
    type Mutation {
        addAuthor(age: Int!, name: String!, books: [String]!): Author
        deleteAuthor(id: String!): Author
    }
`;

export default typeDefs;