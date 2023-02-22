const newsRouter = require("./news");
const meRouter = require("./me");
const coursesRouter = require("./courses");
const siteRouter = require("./site");

function route(app) {
  app.use("/", siteRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
}

module.exports = route;
