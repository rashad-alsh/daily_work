const express = require("express");
//const bodyParser = require('body-parser');

const server = express();

//serve static files in our app
server.use(express.static("/home/rashad/fbw39/workshop/aug_wrkshp/last"));

const port = 4100;
server.listen(port, function () {
  console.log("server is running");
});
