const createError = require("http-errors");

function notfoundHandler(req, res, next) {
  next(createError(404, "Something went wrong. Your content is not found"));
}

function commonErrorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.locals.title = "Error page";
  res.status(err.status || 500);

  if (res.locals.html) {
    res.render("error");
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notfoundHandler,
  commonErrorHandler,
};
