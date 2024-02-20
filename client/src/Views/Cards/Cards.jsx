import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styles from './Cards.module.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Cards = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // Tamaño de la página

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/pokemon');
        const pokemonData = await Promise.all(response.data.map(async (pokemon) => {
          const pokemonDetails = await axios.get(pokemon.url);
          return {
            id: pokemonDetails.data.id,
            nombre: pokemonDetails.data.name,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.data.id}.png`,
            tipo: pokemonDetails.data.types.map((type) => type.type.name).join(' / '),
            vida: pokemonDetails.data.stats[0].base_stat,
            ataque: pokemonDetails.data.stats[1].base_stat,
            defensa: pokemonDetails.data.stats[2].base_stat,
            velocidad: pokemonDetails.data.stats[5].base_stat,
            altura: pokemonDetails.data.height,
            peso: pokemonDetails.data.weight,
          };
        }));
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  // Función para obtener los Pokémon de la página actual
  const getPokemonForPage = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return pokemonList.slice(startIndex, endIndex);
  };

  // Función para manejar el cambio de página
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={styles['card-list']}>
        {getPokemonForPage().map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {/* Controles de paginación */}
      <div className={styles.pagination}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={getPokemonForPage().length < pageSize}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Cards;
