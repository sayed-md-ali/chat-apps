function getUsersHandler(req, res, next) {
  res.render("users");
}

module.exports = {
  getUsersHandler,
};
