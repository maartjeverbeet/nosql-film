const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    imagePath: String,
    voorstellingen: {type:[{
        name: {type: String, required: true},
        time: {type: String, required: true},
        zaal: {type: Number, required: true}
    }]}
}, {
    timestamps: true
});


const Film = mongoose.model('film', FilmSchema);

// Add a 'dummy' user (every time you require this file!)
//const film = new Film({
  //  name: 'Soof',
  //  description: 'Soof is een Nederlandse romantische komedie uit 2013 onder regie van Antoinette Beumer.',
  // imagePath: 'https://media.pathe.nl/nocropthumb/620x955/gfx_content/posters/soof1.jpg',
  //  voorstellingen: [{name: 'soof', time: '12:00 uur', zaal: 1}]
//}).save();

module.exports = Film;