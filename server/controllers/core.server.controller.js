'use strict';

// var from direct transport from nodemailer website best for using locally?? rest below
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

//render main app page
exports.renderIndex = function(req,res) {
    res.render('server/views/index', {
        user: req.user || null
    })
};                                              //removed modules and core didn't exist in dir
//render server error page
exports.renderServerError = function(req, res) {
    res.status(500).render('server/views/500', {
        error: 'Opps! Something went wrong...?'
    });
};
//render server not found page
exports.renderNotFound = function(req, res) {
    res.status(404).render('server/views/404', {
        url: req.originalUrl
    });
};
//send an email when the contact form is submitted
// direct transport from nodemailer website best for using locally??
exports.sendMail = function(req, res) {
    console.log("sending email!!");
    var data = req.body;

    //might need to upgrade to SMTP transport
    transporter.sendMail({
        from: data.contactEmail,
        to: 'karl@reclaimedartcraftsman.com',
        subject: 'Message from ' + data.contactName,
        text: data.contactMsg
    });

    res.json(data);
};