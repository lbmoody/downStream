const db = require("../models");

module.exports = {
    GetUsers: (req, res) => {
        db.User
            .findAll({
                where: {
                    id: !req.user.id
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(401).json(err))
    }
}