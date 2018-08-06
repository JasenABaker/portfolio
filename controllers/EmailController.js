require("dotenv").config()
const express = require('express')
const nodeMailer = require('nodemailer')
const xoauth2 = require('xoauth2')
const smtpTransport = require('nodemailer-smtp-transport');
const router = express.Router()


router.post('/', (req, res) => {
    console.log(req.body)
//     const htmlEmail = `<h3> Contact Details</h3>
//     <ul>
//     <li>Name:${req.body.email.name}</li>
//     <li>Email:${req.body.email.email}</li>
// </ul>
// <h3>Message</h3>
// <p>${req.body.email.message}</p>`
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
            clientId: '4081887340-die8icr4p1aga3heu2u6c85aa4hag389.apps.googleusercontent.com',
            clientSecret: 'D9N768eVgoAA1glEh7OEjOG3',
            refreshToken: '1/V3P76f5-qbHuRPex9paOaAmsZwNNmd4zOX2-SnEgj5c',
            user: 'JasenABaker@gmail.com',
        })
        }
    });
    let mailOptions = {
        from: 'JasenABaker@gmail.com',
        to: 'JasenABaker@gmail.com',
        subject: 'From Portofilio', // Subject line
        text: req.body.email.message, // plain text body
        html: req.body.email// html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('index');
        });
   });




    module.exports = router