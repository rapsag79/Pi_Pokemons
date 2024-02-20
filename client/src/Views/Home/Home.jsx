import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import getPokemons  from "../../redux/actions/actions"

import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav"

import style from "./Home.module.css"

function Home() {
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.allPokemons)

  
  const [filter, setFilter] = useState(allPokemons)
 
  const [searchString, setSearchString] = useState("")

  const handleChange = (event) => {
    event.preventDefault()
    setSearchString(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const filtered = allPokemons.filter(pokemon => pokemon.name.includes(searchString))
    setFilter(filtered)
  }
  
  // console.log(handleSubmit("pikachu"));

    useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch])

  return ( 
    <div className={style["home"]}>
      <h2 className={style["home-title"]}>Henry Pokemon</h2>
      <Nav handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allPokemons={allPokemons} />
    </div>
  );
}
 
export default Home;
