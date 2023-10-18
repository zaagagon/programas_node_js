const express = require('express')

const controller = require('../controllers/clientes')
const router= express.Router()
 const path = 'clientes'
 router.get(
    `/${path}`,
    controller.getData
 )

 module.exports =router
