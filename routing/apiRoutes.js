const router = require("express").Router();
const bodyParser = require("body-parser");
//const path = require("path");

const friends = require("./../app/data/friends");

let sums = []; //empty array for sums of scores.
let diffArr = []; //empty array for difference in values.


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
      
      
      

      loops();
      
      res.json(friends[idx]); //returns index of match.
      
      
        
      
  
 });

 function loops() {
   
   
  for (let i = 0; i < friends.length; i++) { // loops friends array.
    let array = [];
    for (let j = 0; j < friends[i].scores.length; j++) { //loops through scores of each individual friend.
      let result = parseInt(friends[i].scores[j]); //turns values into numbers.
      // console.log(result);
      
      array.push(result);
      
      
    }
    // console.log(friends[i].scores.reduce(getSum));
    //console.log(array.reduce(getSum));
    sums.push(array.reduce(getSum)); //pushes sums of scores to sums array.
    console.log(sums);
    
    
  }
  values();
 }

 function values() {
  
  for (let h = 0; h < (sums.length -1); h++) {
    difference(sums[h], sums.slice(-1)); // loops through sums and finds the difference between the most recent submission and the other friends.
    

  }
  console.log(diffArr);
  minDiff();
 }

 function getSum(total, num) { 
  return total + num;
}

function difference(a, b) {
  console.log(Math.abs(a - b));
  diffArr.push(Math.abs(a - b)); //pushes absolute value to difference array.

}

function minDiff () {
  idx = diffArr.indexOf(Math.min.apply(null, diffArr)); //finds the minimum value of the differences in the array. That is the friend match.
  console.log(idx);
  console.log(friends[idx]);
  
 return friends[idx];
  
}



 module.exports = router;



