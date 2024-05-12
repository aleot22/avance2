const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');

router.post('/', tareasController.agregarTarea);

router.put('/:id', tareasController.marcarTareaCompletada);

router.delete('/:id', tareasController.eliminarTarea);

router.get('/', tareasController.mostrarTareas);

module.exports = router;