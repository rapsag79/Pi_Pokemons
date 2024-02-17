const {Router} = require('express')
const { 
  getTypesHandler, 
} = require('../../handlers/handlersTypes/handlersTypes')

const typeRouter = Router()

typeRouter.get("/", getTypesHandler)

module.exports = typeRouter;