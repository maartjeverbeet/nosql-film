const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoorstellingSchema = new Schema({
    name: {type: String, required: true},
    time: {type: String, required: true},
    zaal: {type: Number, required: true}
}, {
    timestamps: true
});

const Voorstelling = mongoose.model('Voorstelling', VoorstellingSchema);

//const voorstelling = new Voorstelling({
//    name: 'Soof',
//    time: 1200,
//    zaal: 1
//}).save();

module.exports = Voorstelling;