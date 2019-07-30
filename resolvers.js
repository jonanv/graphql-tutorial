// Provide resolver functions for your schema fields
const authors = [{
    name: 'JK Rowling',
    age: 50,
    books: ['Harry Potter and the Gobelt of Fire', 'Harry Potter and Prisioner of Azkaban']
}, 
{
    name: 'George RR Martin',
    age: 70,
    books: ['GOT - Song of Ice and Fire', 'GOT - A Dance with Dragons']
}];

const resolvers = {
    Query: {
        authors: () => {
            return authors
        }
    }
}


/*export default {
    Query: {
        holaMundo: (parents, args, context, info) => 'Hello world!',
    },
    Mutation: {
        createUser: (parents, args, { models }) => models.User.create(args)
    }
};*/