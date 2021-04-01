const db = require("../models");

// Defining methods for the networkController
module.exports = {
    find: function (req, res) {
        db.Network
            .find({ network: req.params.service })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    // .find(req.query)
    // .findById({ _id: req.params.id })
    // .sort({ _id: -1 })

    // ,
    // remove: function (req, res) {
    //     db.Network
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
};
