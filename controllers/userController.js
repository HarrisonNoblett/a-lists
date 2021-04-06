const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.User.create(req.body)
      // Redirect to another API call before sending response to front end
      .then((dbModel) => res.redirect("/api/user/" + dbModel._id))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.User.findOne({ email: req.params.email })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
