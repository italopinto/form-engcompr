const express = require("express");
const multer = require("multer");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const controller = require("./controllers/controller");
const app = express();
const PORT = 8080;

// MIDDLEWARES
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().none());

// ROUTES
app.post("/v1/subs", controller.addSub);

// SERVER
app.listen(process.env.PORT || PORT, (req, res) => {
  console.log(`running on http://localhost:${PORT}/`);
});
