const express = require("express");
const app = express();
const cors = require("cors");
//const bodyParser = require("body-parser");
//
// Router

const upload = require("./requests/upload");

// Middleware

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(cors());
app.use("/requests/upload", upload);




const port = process.env.port || 5000;
app.listen(port, () => console.log("app running on port 5000"));