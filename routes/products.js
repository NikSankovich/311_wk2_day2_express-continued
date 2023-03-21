const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
    res.json(products)
})

router.get("/products/:id", (req, res) => {
    console.log("GET /products/:id")

    let myId = req.params.id;

    let matchingItem = products.find((item, index) => {
        return item._id == myId
    })

    if (matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("No ID found")
    }


})

router.post("/products", (req, res) => {
    console.log("POST /products")

    let newItem = {};
    newItem._id = contacts.length + 1;
    newItem.postId = 1;
    newItem.name = req.body.name;
    newItem.description = req.body.description;


    // put in the database
    products.push(newItem);

    // return the newItem on the response
    res.json(newItem)
})


module.exports = router

