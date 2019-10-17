const mongoose = require('mongoose');

/**
 * Informando o schema e quais campos ele vai possuir
 * 
 * Dentro do { } eu passo o nome do campo e o tipo dele
 */
const UserSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', UserSchema);