const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/home.html"));
// });


const htmlRoutes = require("./routing/htmlRoutes");
const apiRoutes = require("./routing/apiRoutes");

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);








// to confirm server.
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });