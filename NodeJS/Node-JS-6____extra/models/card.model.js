const sql = require('../config/db.config.js');

// Constructor
const Card = function(cards) {
    this.id = card.id;
    this.card_number = card.card_number;
    this.cardholder_name = card.cardholder_name;
    this.card_type = card.card_type;
    this.expiration_date = card.expiration_date;
    this.cvv = card.cvv;
    this.bank_name = card.bank_name;
    this.issuing_country = card.issuing_country; 
};


// create a new card
Card.create = (newCard, result) => {
    sql.query("insert into cards set ?", newCard, (err, res) => {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, {id: res.insertId, ...newCard});
    });
};

// get all cards
Card.getAll = result => {
    sql.query("select * from cards", (err, res) => {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// get card by id
Card.getById = (id, result) => {
    sql.query("select * from cards where id = ${id}", (err, res) => {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if(res.length)
        {
            result(null, res);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

Card.updateById = (id, card, result) => {
    sql.query("update cards set title = ?, author = ?, genre = ?, publication_ = ? where [card.title, ]", (err, res) => {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if(res.affectedRows == 0)
        {
            result({kind: "not_found"}, null);
            return;
        }
        result(null, {id: id, ...card});
    });
};

Card.remove = (id, result) => {
    sql.query("delete from cards where id = ?", id, (err, res) => {
        if(err)
        {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if(res.affectedRows == 0)
        {
            result({kind: "not_found"}, null);
            return;
        }
        result(null, res);
    })
}

module.exports = Card