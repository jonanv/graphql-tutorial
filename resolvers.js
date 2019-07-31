const authors = [{
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter and the Gobelt of Fire', 'Harry Potter and Prisioner of Azkaban']
},
{
    name: 'George RR Martin',
    age: 70,
    books: ['GOT - Song of Ice and Fire', 'GOT - A Dance with Dragons']
},
{
    name: 'Stephen King',
    age: 60,
    books: ['The Green Mile', 'Carrie']
}];

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        authors: () => {
            return authors
        },
        author: (root, args) => {
            const age = args.age;
            return authors.find(author => author.age === age);
        }
    }
}

export default resolvers;