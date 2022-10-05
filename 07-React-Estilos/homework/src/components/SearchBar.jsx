import React from 'react';
import style from './styles/searchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div className ={style.container}>
          <input className ={style.imput} type='text' placeholder='Ciudad...' />
          <button className ={style.btn} onClick={() => onSearch('Buscando Ciudad... ')}>agregar</button>
         </div>
};