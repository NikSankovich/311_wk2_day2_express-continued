const comments = require("../data/comments")

// get all comments
const list = (req, res) => {
    res.json(comments)
}

// get one comment by ID
const show = (req, res) => {
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


}

const create = (req, res) => {
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
}

module.exports = { list, show, create }