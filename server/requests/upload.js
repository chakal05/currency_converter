const express = require('express');
const router = express.Router();
const multer = require('multer');

const customLogo = multer({
    dest : "./logosFolder"
});

router.post('/', upload = customLogo.single("file"), (req, res) => {
    
    // req.file.path should be used to retrive schools logos


    if(upload){
    res.json({status : 200});
    }
 
})



module.exports = router;