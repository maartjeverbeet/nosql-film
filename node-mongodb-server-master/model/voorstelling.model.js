const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoorstellingSchema = new Schema({
    film: {type: String, required: true},
    time: {type: Number, required: true},
    zaal: {type: Number, required: true}
});

const Voorstelling = mongoose.model('Voorstelling', VoorstellingSchema);

const voorstelling = new Voorstelling({
    film: 'Soof',
    time: 1200,
    zaal: 1
}).save();

module.exports = Voorstelling;