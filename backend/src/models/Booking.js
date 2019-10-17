const mongoose = require('mongoose');

/**
 * Informando o schema e quais campos ele vai possuir
 * 
 * Dentro do { } eu passo o nome do campo e o tipo dele
 */
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        spot: "Spot"
    }
});

module.exports = mongoose.model('Booking', BookingSchema);