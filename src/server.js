const express = require("express");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");
const controller = require("./controllers/controller");
const app = express();
const PORT = 8080;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().none());
app.use(helmet());
app.use(morgan("dev"));

// ROUTES
app.post("/v1/subs", controller.addSub);

// SERVER
app.listen(process.env.PORT || PORT, (req, res) => {
  console.log(`running on http://localhost:${PORT}/`);
});
