var express = require("express");
var router = express.Router();
const CONFIG = require("../configs");
const google = require("googleapis").google;
const jwt = require("jsonwebtoken");
const OAuth2 = google.auth.OAuth2;

router.get("/", function (req, res) {
  // Create an OAuth2 client object from the credentials in our config file
  const oauth2Client = new OAuth2(
    CONFIG.oauth2Credentials.client_id,
    CONFIG.oauth2Credentials.client_secret,
    CONFIG.oauth2Credentials.redirect_uris[0]
  );

  // Obtain the google login link to which we'll send our users to give us access
  const loginLink = oauth2Client.generateAuthUrl({
    access_type: "offline", // Indicates that we need to be able to access data continously without the user constantly giving us consent
    scope: CONFIG.oauth2Credentials.scopes, // Using the access scopes from our config file
  });
});

router.get("/auth_callback", function (req, res) {
  // Create an OAuth2 client object from the credentials in our config file
  const oauth2Client = new OAuth2(
    CONFIG.oauth2Credentials.client_id,
    CONFIG.oauth2Credentials.client_secret,
    CONFIG.oauth2Credentials.redirect_uris[0]
  );

  if (req.query.error) {
    // The user did not give us permission.
    return res.status(401).send("Unauthorized");
  } else {
    oauth2Client.getToken(req.query.code, function (err, token) {
      if (err) return res.status(401).send("Unauthorized");
      // Store the credentials given by google into a jsonwebtoken in a cookie called 'jwt'
      res.cookie("jwt", jwt.sign(token, CONFIG.JWTsecret));
      return res;
    });
  }
});

module.exports = router;
