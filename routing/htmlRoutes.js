const router = require("express").Router();
//const bodyParser = require("body-parser");
const path = require("path");

const apiRoutes = require("./apiRoutes");


router.use('/api', apiRoutes);




router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });



  router.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  
  module.exports = router;