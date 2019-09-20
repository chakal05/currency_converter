const express = require('express');
const router = express.Router();
const multer = require('multer');

const customLogo = multer({
    dest : "../logosFolder"
});

router.post('/', customLogo.single("file"), (req, res) => {
    res.json({file : req.file});
    console.log(req.file);
})



module.exports = router;