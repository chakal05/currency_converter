const express = require("express");
const app = express();

//

// Router

const upload = require("./routes/upload");

// Middleware



app.use("/upload", upload);




const port = process.env.port || 5000;
app.listen(port, () => console.log("app running on port 5000"));