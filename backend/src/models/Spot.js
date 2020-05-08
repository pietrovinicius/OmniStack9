//segue a mesma estrutura do model User
const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    //meus objetos e por ultimo o vetor de strings 
    
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot' , SpotSchema);