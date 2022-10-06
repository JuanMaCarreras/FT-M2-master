import React, { useState } from 'react';
import style from './styles/searchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [input, setInput] = useState ('');

  const handleChange = (event)=> {
      setInput(event.target.value)

  }


  return <div className ={style.container}>
          <input className ={style.imput} type='text'  onChange ={handleChange} placeholder='Ciudad...' />
          <button className ={style.btn} onClick={() => onSearch(input)}>Agregar</button>
         </div>
};