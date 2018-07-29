const router = require("express").Router();
const bodyParser = require("body-parser");
//const path = require("path");

const friends = require("./../app/data/friends");


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


router.get("/friends", function(req, res) {
    return res.json(friends);
  });

// Create New Characters - takes in JSON input
router.post("/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  const friend = req.body;

  console.log(friend);

      friends.push(friend);
      res.json(true); 
      
  
 });

 module.exports = router;



