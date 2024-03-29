const Booking = require('../models/Booking');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } =  req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await booking.populate('store').populate('user').execPopulate();
        const temp = await booking.populate('store').populate('user').execPopulate();
        return res.json(booking);
    }
};