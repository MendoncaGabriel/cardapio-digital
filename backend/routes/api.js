var express = require('express');
var router = express.Router();
const produto = require('../controllers/produtoController')


router.get('/produtos', produto.getAll);

router.get('/', function(req, res, next) {
  res.status(200).json({msg: "bem vindo"});
});

module.exports = router;
