const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");

function route(app) {
  app.use("/", siteRouter);
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
}

module.exports = route;
