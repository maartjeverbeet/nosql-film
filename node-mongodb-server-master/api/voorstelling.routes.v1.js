var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Voorstelling = require('../model/voorstelling.model');

routes.get('/voorstellingen', function(req, res) {
    res.contentType('application/json');
    Voorstelling.find({})
        .then((voorstellingen) =>{
            res.status(200).json(voorstellingen);
        })
        .catch((error) => res.status(401).json(error));
});

routes.post('/voorstellingen', function(req, res, next) {
   const voorstellingReq = req.body;
   Voorstelling.create(voorstellingReq)
       .then(voorstelling => res.send(voorstelling))
       .catch(next);
});

routes.put('/voorstellingen/:id', function(req, res, next) {
   const voorstellingId = req.params.id;
   const voorstellingV = req.body;

   Voorstelling.findByIdAndUpdate({ _id: voorstellingId}, voorstellingV)
       .then(() => Voorstelling.findByIdAndUpdate({ _id: voorstellingId}))
       .then(voorstelling => res.send(voorstelling))
       .catch(next);
});

routes.delete('/voorstellingen/:id', function(req, res, next) {
   const voorstellingId = req.params.id;

   Voorstelling.findByIdAndRemove({_id: voorstellingId})
       .then(voorstelling=> res.status(204).send(voorstelling))
       .catch(next);
});

module.exports = routes;