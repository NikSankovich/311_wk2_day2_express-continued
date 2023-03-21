const express = require('express')
const router = express.Router()

router.get('/comments', (req, res) => {
    res.json(comments)
})

router.get("/comments/:id", (req, res) => {
    console.log("GET /comments/:id")

    let myId = req.params.id;

    let matchingItem = comments.find((item, index) => {
        return item._id == myId
    })

    if (matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("No ID found")
    }


})

router.post("/comments", (req, res) => {
    console.log("POST /comments")

    let newItem = {};
    newItem._id = comments.length + 1;
    newItem.postId = 1;
    newItem.body = req.body.body;


    // put in the database
    comments.push(newItem);
    console.log(newItem);
    // return the newItem on the response
    res.json(newItem)
})

module.exports = router