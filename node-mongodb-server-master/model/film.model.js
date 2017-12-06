const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    imagePath: String
}, {
    timestamps: true
});


const Film = mongoose.model('film', FilmSchema);

// Add a 'dummy' user (every time you require this file!)
const film = new Film({
    name: 'Soof',
    description: 'Soof is een Nederlandse romantische komedie uit 2013 onder regie van Antoinette Beumer.',
    imagePath: 'https://media.pathe.nl/nocropthumb/620x955/gfx_content/posters/soof1.jpg'
}).save();

module.exports = Film;