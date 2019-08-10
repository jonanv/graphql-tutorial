import { Schema, model } from 'mongoose';
import uuid from 'node-uuid';

const authorSchema = new Schema({
    //name, age, book and id.
    id: { type: String, default: uuid.v1 },
    name: String,
    age: Number,
    books: [String]
});

export default model('Author', authorSchema);