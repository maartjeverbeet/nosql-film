var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Zaal = require('../model/zaal.model');

routes.get('/zalen', function(req, res) {
    res.contentType('application/json');
    Zaal.find({})
        .then((zalen) => {
            res.status(200).json(zalen);
        })
        .catch((error) => res.status(401).json(error));
});

routes.post('/zalen', function(req, res, next) {
    const zaalReq = req.body;
    Zaal.create(zaalReq)
        .then(zaal => res.send(zaal))
        .catch(next);
});

routes.put('/zalen/:id', function(req, res, next) {
    const zaalId = req.params.id;
    const zaalZ = req.body;

    Zaal.findByIdAndUpdate({ _id: zaalId}, zaalZ)
        .then(() => Zaal.findByIdAndUpdate({ _id: zaalId}))
        .then(zaal => res.send(zaal))
        .catch(next);
});

routes.delete('/zalen/:id', function(req, res, next) {
    const zaalId = req.params.id;

    Zaal.findByIdAndRemove({ _id: zaalId})
        .then(zaal => res.status(204).send(zaal))
        .catch(next);
});

module.exports = routes;