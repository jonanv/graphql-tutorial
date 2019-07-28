import express from 'express';
const server = express();
const PORT = 3000;

console.log('Changing the file');

server.listen(PORT, () => {
    console.log('Listening on port', PORT);
})
