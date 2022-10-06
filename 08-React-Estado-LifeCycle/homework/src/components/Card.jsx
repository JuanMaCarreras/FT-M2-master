import React from 'react';
import style from './styles/card.module.css'

export default function Card({max, min, name, img ,onClose, id}) {
  // acá va tu código
  return (<div className={style.card}>
            <button className={style.btn} onClick={() => onClose(id)}>X</button>
            <h4 className ={style.city}>{name}</h4>
            <div className={style.data}>
              <p>Min</p>
              <p>{min}</p>
              <p>Max</p>
              <p>{max}</p>
            </div>
            <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`}/>
           </div>)
};