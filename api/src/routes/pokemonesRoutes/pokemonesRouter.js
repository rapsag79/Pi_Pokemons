const {Router} = require('express')

const pokemonsRouter = Router()

const { 
  getPokemonsHandler,
  getDetailPokemonsHandler,
  postPokemonsHandler
} = require("../../handlers/handlersPokemons/handlersPokemons.js")

pokemonsRouter.get("/", getPokemonsHandler)

pokemonsRouter.get("/:id", getDetailPokemonsHandler)

pokemonsRouter.post("/", postPokemonsHandler)

module.exports = pokemonsRouter;