// Construct a schema, using GraphQL schema language
export default `
    type Author {
        id: Int
        age: Int
        name: String
        books: [String]
    }
    type Query {
        authors: [Author]
        author(id: Int): Author
    }
`;