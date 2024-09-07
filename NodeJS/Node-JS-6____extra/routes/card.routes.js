module.exports = app => {
    const cards = require("../controllers/card.controllers.js");
    
    app.post("/cards", cards.create);
    app.get("/cards", cards.findAll);
    app.get("/cards/:cardId", cards.findOne);
    app.put("/cards/:cardId", cards.update);
    app.delete("/cards/:cardId", cards.delete);
}