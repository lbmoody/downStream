const db = require("../models");

module.exports = {
    StreamCountByUser: (req, res) => {
        db.UserStreams
            .findAll({
                where: {
                    userId: req.user.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(401).json(err))
    }
};