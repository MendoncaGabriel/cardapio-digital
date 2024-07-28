const db = require('../database.json')

class ProductController {
    static getAll(req, res) {
        res.status(200).json(db)
    }

}

module.exports = ProductController