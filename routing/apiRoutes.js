app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  const friend = req.body;

  console.log(friend);

      friends.push(friend);
      res.json(true); 
      
  
 });