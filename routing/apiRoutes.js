const router = require("express").Router();
const bodyParser = require("body-parser");
//const path = require("path");

const friends = require("./../app/data/friends");
let sums = [];



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

      loops();
      
      
        
      
  
 });

 function loops() {
  for (let i = 0; i < friends.length; i++) {
    let array = [];
    for (let j = 0; j < friends[i].scores.length; j++) {
      let result = parseInt(friends[i].scores[j]);
      // console.log(result);
      
      array.push(result);
      
      
    }
    // console.log(friends[i].scores.reduce(getSum));
    //console.log(array.reduce(getSum));
    sums.push(array.reduce(getSum));
    console.log(sums);
    
    
  }
  values();
 }

 function values() {
  for (let h = 0; h < (sums.length -1); h++) {
    difference(sums[h], sums[h + 1]);
    

  }
 }

 function getSum(total, num) {
  return total + num;
}

function difference(a, b) {
  console.log(Math.abs(a - b));
}

 module.exports = router;



