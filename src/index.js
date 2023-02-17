var express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();
const port = 3001;

const route = require("./routes");
const db = require("./config/db");

//connect DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//http logger morgan
app.use(morgan("combined"));
//template engine

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));

//routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
