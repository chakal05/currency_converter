const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");

// MiddleWare
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Creare connection to Db

const mongoUri = "mongodb://localhost:27017/manedek";

const conn = mongoose.createConnection(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Init gfs ( gridfs-stream )

let gfs;

//Connection URL

conn.on("error", console.error.bind(console, "connection error to manedek db"));

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("schoolLogos");

  //console.log('all set!');
});

// Caching -- to come

// Create storage engine

const storage = new GridFsStorage({
  url: mongoUri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "schoolLogos"
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// Upload scool logo

router.post("/", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

// load Logo

router.get("/", (req, res) => {
  
  gfs.files.findOne({ filename: req.query.filename }, (err, file) => {
    res.send (file.filename);
   
  });
});

module.exports = router;
