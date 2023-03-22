const vehicles = require("../data/vehicles")

const list = (req, res) => {
    res.json(vehicles)
}

const show = (req, res) => {
    console.log("GET /vehicles/:id")

    let myId = req.params.id;

    let matchingItem = vehicles.find((item, index) => {
        return item._id == myId
    })

    if (matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("No ID found")
    }


}

const create = (req, res) => {
    console.log("POST /vehicles")

    let newItem = {};
    newItem._id = contacts.length + 1;
    newItem.postId = 1;
    newItem.year = req.body.year;
    newItem.make = req.body.make;
    newItem.model = req.body.model;


    // put in the database
    vehicles.push(newItem);

    // return the newItem on the response
    res.json(newItem)
}

module.exports = { list, show, create }