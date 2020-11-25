const express = require("express");
const log4js = require("log4js");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const DB = require("./db");

const routes = require("./routes/index");
const authRouter = require("./routes/auth");
const testAPIRouter = require("./routes/test");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", authRouter);
app.use(`/api/`, routes);
app.use("/test", testAPIRouter);

app.use(log4js.connectLogger(logger, { level: "auto" }));

DB().then(async () => {
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Backend app listening on port ${process.env.PORT}!`)
  );
});

module.exports = app;
