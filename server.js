import express from 'express';
const server = express();
const PORT = 3000;

server.get('/graphql', (req, res) => {
    res.send('<html> <head> <title> GraphQL </title> </head> <body> <h1> Hello word! </h1> </body> </html>');
});

server.listen(PORT, () => {
    console.log('Listening on port', PORT);
})
