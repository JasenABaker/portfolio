require("dotenv").config()
const express = require('express')
const nodeMailer = require('nodemailer')
const router = express.Router()



router.post('/', (req, res) => {
    let transporter = nodeMailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'JasnABaker@gmail.com',
            pass: '18773jbbb'
        }
    });
    let mailOptions = {
        from: 'JasenABaker@gmail.com',
        to: 'JasenABaker@gmail.com',
        subject: 'From Portofilio', // Subject line
        text: 'Some Text', // plain text body
        html: req.body // html body
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