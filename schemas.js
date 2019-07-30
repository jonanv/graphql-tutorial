// Construct a schema, using GraphQL schema language
export default `
    type Author {
        age: Int
        name: String
        Books: [String]
    }
    type Query {
        author: [Author]
    }
`;