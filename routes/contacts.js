const express = require('express')
const router = express.Router()

router.get('/contacts', (req, res) => {
    res.json(contacts)
})

router.get("/contacts/:id", (req, res) => {
    console.log("GET /contacts/:id")

    let myId = req.params.id;

    let matchingItem = contacts.find((item, index) => {
        return item._id == myId
    })

    if (matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("No ID found")
    }


})

router.post("/contacts", (req, res) => {
    console.log("POST /contacts")

    let newItem = {};
    newItem._id = contacts.length + 1;
    newItem.postId = 1;
    newItem.name = req.body.name
    newItem.occupation = req.body.occupation
    newItem.avatar = req.body.avatar


    // put in the database
    contacts.push(newItem);

    // return the newItem on the response
    res.json(newItem)
})

module.exports = router
