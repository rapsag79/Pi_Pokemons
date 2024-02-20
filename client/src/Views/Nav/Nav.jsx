import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"

const Nav = ({ handleChange, handleSubmit }) => {
  return (
    <nav className={styles.divSp}>
      <SearchBar handleChange={ handleChange} handleSubmit={handleSubmit }/>
    </nav>
  )
}

export default Nav;


// import React, { useState } from "react";

// const Nav = ({
//   handleChange,
//   handleSubmit,
//   handleTypeFilter,
//   handleOriginFilter,
//   handleSort,
// }) => {
//   const [typeFilter, setTypeFilter] = useState("");
//   const [originFilter, setOriginFilter] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   const handleTypeChange = (value) => {
//     setTypeFilter(value);
//     handleTypeFilter(value);
//   };

//   const handleOriginChange = (value) => {
//     setOriginFilter(value);
//     handleOriginFilter(value);
//   };

//   const handleSortChange = (value) => {
//     setSortOrder(value);
//     handleSort(value);
//   };

//   // Opciones de filtro por tipo
//   const typeOptions = [
//     { id: 1, nombre: "normal" },
//     { id: 2, nombre: "fighting" },
//     { id: 3, nombre: "flying" },
//     { id: 4, nombre: "poison" },
//     { id: 5, nombre: "ground" },
//     { id: 6, nombre: "rock" },
//     { id: 7, nombre: "bug" },
//     { id: 8, nombre: "ghost" },
//     { id: 9, nombre: "steel" },
//     { id: 10, nombre: "fire" },
//     { id: 11, nombre: "water" },
//     { id: 12, nombre: "grass" },
//     { id: 13, nombre: "electric" },
//     { id: 14, nombre: "psychic" },
//     { id: 15, nombre: "ice" },
//     { id: 16, nombre: "dragon" },
//     { id: 17, nombre: "dark" },
//     { id: 18, nombre: "fairy" },
//     { id: 19, nombre: "unknown" },
//     { id: 20, nombre: "shadow" },
//   ];

//   return (
//     <nav>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Buscar por nombre..."
//           onChange={handleChange}
//         />
//         <button type="submit">Buscar</button>
//       </form>
//       <div>
//         <label htmlFor="type">Filtrar por tipo:</label>
//         <select
//           name="type"
//           id="type"
//           value={typeFilter}
//           onChange={(e) => handleTypeChange(e.target.value)}
//         >
//           <option value="">Todos</option>
//           {typeOptions.map((option) => (
//             <option key={option.id} value={option.nombre}>
//               {option.nombre}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="origin">Filtrar por origen:</label>
//         <select
//           name="origin"
//           id="origin"
//           value={originFilter}
//           onChange={(e) => handleOriginChange(e.target.value)}
//         >
//           <option value="">Todos</option>
//           <option value="api">API</option>
//           <option value="database">Base de datos</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="sort">Ordenar por:</label>
//         <select
//           name="sort"
//           id="sort"
//           value={sortOrder}
//           onChange={(e) => handleSortChange(e.target.value)}
//         >
//           <option value="asc">Nombre ascendente</option>
//           <option value="desc">Nombre descendente</option>
//         </select>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
