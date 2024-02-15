const infoCleaner = (pokemon) => {
  return {
    nombre: pokemon.name,
    imagen: pokemon.sprites.front_default,
    vida: pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat,
    ataque: pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat,
    defensa: pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat,
    velocidad: pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat,
    altura: pokemon.height,
    peso: pokemon.weight,
    created: false
  };
};

module.exports = infoCleaner;
