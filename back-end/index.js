const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// inital db
app.listen(process.env.PORT, "0.0.0.0", () => console.log("server running..."));

const publicRoutes = require("./routes/main");
// use public routes
app.use("/api/pb", publicRoutes);

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});
