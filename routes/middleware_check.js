"use strict";
const CONFIG = require("../configs");
const jwt = require("jsonwebtoken");
const google = require("googleapis").google;
const OAuth2 = google.auth.OAuth2;

exports.default = function (req, res, next) {
  if (!req.cookies.jwt) {
    return res.status(401).send("Unauthorized");
  }

  const oauth2Client = new OAuth2(
    CONFIG.oauth2Credentials.client_id,
    CONFIG.oauth2Credentials.client_secret,
    CONFIG.oauth2Credentials.redirect_uris[0]
  );

  oauth2Client.credentials = jwt.verify(req.cookies.jwt, CONFIG.JWTsecret);
  next();
};
