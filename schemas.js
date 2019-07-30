// Construct a schema, using GraphQL schema language
export default `
    type Author {
        age: Int
        name: String
        Books: [String]
        gender: String
    }
    type Query {
        author: [Author]
    }
`;