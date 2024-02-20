/** IMPORTS CONFIG =========================================================== */
const express = require('express')
const projeto = express.Router()
const projetoController = require('../../controllers/site/projetosController')
const { requireAuth, checkUsser } = require('../../middleware/authMiddleware')


//Route
projeto.get('*', checkUsser)
projeto.get('/publicarprojeto', requireAuth, projetoController.publicarPojeto)



/**EXPORT ==================================================================== */
module.exports = projeto
