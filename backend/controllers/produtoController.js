const database = require('../database.json');

exports.getAll = (req, res) => {
    res.status(200).json(database); 
};
