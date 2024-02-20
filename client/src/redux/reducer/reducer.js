import { GET_POKEMONS } from "../actions-type/actions-types"

let initialState = {allPokemons: [], types: []}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        pokemonsCopy: action.payload,
      };
    default:
      return state
  }
}