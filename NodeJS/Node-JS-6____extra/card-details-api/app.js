//   config.js      -->  model.js    -->   controller.js   -->   routes     --> app.js
//  Configure db        db queries        error handling        API routes      express



const express = require("express");
const app = express();
app.use(express.json());
// npm install cors
// npm start 
const mysql = require("mysql");

const cors = require("cors");  // Cross-Origin Resource Sharing
app.use(cors());



const cardRoutes = require("../routes/card.routes.js");
app.use("/cards", cardRoutes);

app.get("/", (req, res) => {
    res.json({message: "This is the main page"});
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});