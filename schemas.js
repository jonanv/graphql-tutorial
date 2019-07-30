// Construct a schema, using GraphQL schema language
export default `
    type Author {
        age: Int
        name: String
        books: [String]
    }
    type Query {
        author: [Author]
    }
`;