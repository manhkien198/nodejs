const express = require("express");
const exhbs = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;
const hbs = exhbs.create({ extname: ".hbs" });
app.use(express.static(path.join(__dirname, "public")));
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(
  process.env.PORT || port,
  console.log(`app listening at http://localhost:${port}`)
);
