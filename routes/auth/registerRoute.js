/**IMPORTS CONFIG ==================================================== */
const express = require('express')
const register = express.Router()
const registerController = require('../../controllers/auth/registerController')

// Route
register.get('/', registerController.index)
register.post('/enviar_registro', registerController.store)
register.post('/verificar_email', registerController.confirmEmail)

/**EXPORT ================================================================ */
module.exports = register