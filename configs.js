require("dotenv").config();

module.exports = {
  // The secret for the encryption of the jsonwebtoken
  JWTsecret: process.env.JWT_SECRET || "mysecret",
  baseURL: process.env.BASE_URL,
  port: process.env.PORT,
  // The credentials and information for OAuth2
  oauth2Credentials: {
    client_id: process.env.CLIENT_ID || "",
    project_id: process.env.PROJECT_ID || "", // The name of your project
    auth_uri:
      process.env.AUTH_URI || "https://accounts.google.com/o/oauth2/auth",
    token_uri: process.env.TOKEN_URI || "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url:
      process.env.CERT_URI || "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.CLIENT_SECRET || "",
    redirect_uris: [`${process.env.BASE_URL}/auth_callback`],
    scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
  },
};
