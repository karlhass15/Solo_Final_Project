var express = require('express');
var router = express.Router();
var mailer = require('../controllers/core.server.controller');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.model('Email', new Schema({"contactName": String, "contactEmail": String, "contactMsg": String},
    {collection: 'email'}));
var Email = mongoose.model('Email');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({expanded: true}));


router.post('/', function(req, res) {
    console.log("contact route!");

    var addedContact = new Email({
        "contactName" : req.body.contactName,
        "contactEmail": req.body.contactEmail,
        "contactMsg" : req.body.contactMsg
    });

    addedContact.save(function(err, data){
        if(err) console.log(err);

    });

    mailer.sendMail(req, res);
});


module.exports = router;

