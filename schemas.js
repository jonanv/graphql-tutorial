// Construct a schema, using GraphQL schema language
export default `
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
`;