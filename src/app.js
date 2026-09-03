const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { engine } = require("express-handlebars");
const port = 3000;

const route = require("./routes/index");

app.use(express.static(path.join(__dirname, "public")));

// Log request ra terminal
app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Action ---> Dispatcher ---> function handler

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
