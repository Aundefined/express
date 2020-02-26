var express = require('express');
var router = express.Router();

var controlador = require('../controllers/IncidenciaController.js');
var controladorSistema = require('../controllers/SystemController.js');

/* GET home page. */
router.get('/', controlador.funcionGet);
router.get('/sistema', controladorSistema.GetInfo);

module.exports = router;
