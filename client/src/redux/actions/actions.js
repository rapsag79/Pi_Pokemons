import axios from "axios";
import { GET_POKEMONS } from "../actions-type/actions-types";

const URL = "http://localhost:3001/pokemon"

export default function getPokemons() {
  return async function (dispatch) {
    const response = (await axios(`${URL}`)).data
    // console.log(response);
    return dispatch({
      type: GET_POKEMONS,
      payload: response,
    })
  }
}

