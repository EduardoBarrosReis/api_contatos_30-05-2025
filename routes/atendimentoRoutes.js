const express = require('express');

const router = express.Router();

const atendimentoController = require('../controllers/atendimentoController');


// GET /api/contatos

router.get('/', atendimentoController.getAllAtendimento);


// GET /api/contatos/:id

router.get('/:id', atendimentoController.getAtendimentoById);


// POST /api/contatos

router.post('/', atendimentoController.createAtendimento);


// PUT /api/contatos/:id

router.put('/:id', atendimentoController.updateAtendimento);


// DELETE /api/contatos/:id

router.delete('/:id', atendimentoController.deleteAtendimento);


module.exports = router;