const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const GeneralController = require("./controllers/GeneralControllers.js")

if (process.env.NODE_ENV != "production") {
    require("dotenv").config({ path: "config/Keys.env" });
}

const app = express();

app.use(express.static("public"));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));

app.use("/", GeneralController);

app.get("/", (req, res) => {
    res.send("testing");
})

app.listen(process.env.PORT, () => {
    console.log(`web server on PORT ${process.env.PORT}`);
})