const { application } = require('express');
const mongodb = require('../data/database');
const ObjetcId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);        
    });
};

const getSingle = async (req, res) => {
    const userId = new ObjetcId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: userId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);        
    });
};

module.exports = {
    getAll,
    getSingle
};