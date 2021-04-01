const db = require("../models");

module.exports = {
  find: function (req, res) {
    db.Network.find({ network: req.params.service })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
