const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ZaalSchema = new Schema({
    nummer: {type: Number, required: true}
});

const Zaal = mongoose.model('Zaal', ZaalSchema);

const zaal = new Zaal({
    nummer: 1
}).save();

module.exports = Zaal;