const Spot = require('../models/Spot');

module.exports = {

    async show (req, res){
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });

        Console.log('==================================Dashboard');
        return res.json(spots);
    }
}