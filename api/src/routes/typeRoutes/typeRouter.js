const {Router} = require('express')
const { 
  getTypesHandler, 
  getDetailTypesHandler,
  postTypesHandler 
} = require('../../handlers/handlersTypes/handlersTypes')

const typeRouter = Router()

typeRouter.get("/", getTypesHandler)

typeRouter.get("/:id", getDetailTypesHandler)

typeRouter.post("/", postTypesHandler)

module.exports = typeRouter;