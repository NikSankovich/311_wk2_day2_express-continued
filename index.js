const express = require("express");
const bodyParser = require("body-parser");



const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('public'))

const contacts = require("./routes/contacts")
const vehicles = require("./routes/vehicles")
const comments = require("./routes/comments")
const products = require("./routes/products")


//bodyParser.json()
app.use(express.json());

// all
app.use(contacts)
app.use(vehicles)
app.use(comments)
app.use(products)


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});
