//
// ./api/v1/film.routes.v1.js
//
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Film = require('../model/film.model');

//
// Geef een lijst van alle users.
//
routes.get('/films', function (req, res) {
    res.contentType('application/json');

    Film.find({})
        .then(function (films) {
            res.status(200).json(films);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

//
// Retourneer één specifieke users. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/users/23
//
routes.get('/films/:id', function (req, res) {
    const filmId = req.params.id;

    Film.findOne({_id: filmId})
        .then((film) => {
            res.status(200).json(film);
        })
        .catch((error) => res.status(400).json(error));
});

//
// Voeg een user toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/users
//
routes.post('/films', function (req, res, next) {
    const filmReq = req.body;
    Film.create(filmReq)
        .then(film => res.status(200).send(film))
        .catch((error) => res.status(400).json(error))
});

//
// Wijzig een bestaande user. De nieuwe info wordt gestuurd via de body van de request message.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: PUT http://hostname:3000/api/v1/users/23
//
routes.put('/films/:id', function (req, res) {
    const filmId = req.params.id;
    const filmF = req.body;

    Film.findByIdAndUpdate({_id: filmId},filmF)
        .then(()=> Film.findByIdAndUpdate({_id: filmId}))
        .then(film => res.send(film))
        .catch((error) => res.status(400).json(error))
});

//
// Verwijder een bestaande user.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: DELETE http://hostname:3000/api/v1/users/23
//
routes.delete('/films/:id', function (req, res) {
    const filmId = req.params.id;

    Film.findByIdAndRemove({_id: filmId})
        .then(film => res.status(204).send(film))
        .catch((error) => res.status(400).json(error))
});

module.exports = routes;