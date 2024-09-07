const Card = require("../models/card.model.js");

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Content empty"});
    }

    const card = new Card({
        card_number: card.body.card_number,
        cardholder_name: card.body.cardholder_name,
        card_type: card.body.card_type,
        expiration_date: card.body.expiration_date,
        cvv: card.body.cvv,
        bank_name: card.body.bank_name,
        issuing_country: card.body.issuing_country
    });

    Card.create(card, (err, data) => {
        if(err)
            res.status(400).send({ message: err.message || "Error"});
        else
            res.send(data);
    });
};


exports.findAll = (req, res) => {
    Card.getAll((err, data) => {
        if(err)
            res.status(400).send({ message: err.message || "Error"});
        else
            res.send(data);
    });
};

exports.findOne = (req, res) => {
    Card.findById(req.params.cardId, (err, data) => {
        if(err)
        {
            if(err.kind == "not_found")
            {
                res.status(400).send({ message: `Card not found with id ${req.params.cardId}. `});
            }
            else
            {
                res.status(500).send({ message: "Error with retrieving with id" + req.params.cardId });
            }
        }
        else res.send(data);
    });
};

exports.update = (req, res) => {
    if(!req.body) {
        res.status(400).send({ message: "Content empty"});
    }
    Card.findById(req.params.cardId, new Card(req.body), (err, data) => {
        if(err)
        {
            if(err.kind == "not_found")
            {
                res.status(400).send({ message: `Card not found with id ${req.params.cardId}.` });
            }
            else
            {
                res.status(500).send({ message: "Error updating with id" + req.params.cardId });
            }
        }
        else res.send(data);
    });
};


exports.delete = (req, res) => {
    Card.remove(req.params.cardId, (err, data) => {
        if(err)
        {
            if(err.kind == "not_found")
            {
                res.status(400).send({ message: `Card not found with id ${req.params.cardId}.`});
            }
            else
            {
                res.status(500).send({
                    message: "Error deleting with id" + req.params.cardId});
            }
        }
        else res.send({ message: `Card deleted successfully` });
    });
};


