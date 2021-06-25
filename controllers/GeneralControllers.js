const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.get("/", (req, res) => {
    res.render("home", {
        title: "Home"
    });
})

router.get("/message", (req, res) => {
    res.render("message", {
        title: "Message"
    });
})

router.post("/message", (req, res) => {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Find your Account SID and Auth Token at twilio.com/console
    // and set the environment variables. See http://twil.io/secure
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: `Hi ${req.body.pName}, I am trying to use twilio`,
            from: '+12024992532',
            to: `+16476884849`
        })
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(`Error ocurred ${err}`);
        });
})

module.exports = router