//segue a mesma estrutura do model spot
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    //meus objetos e por ultimo o vetor de strings 
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking' , BookingSchema);