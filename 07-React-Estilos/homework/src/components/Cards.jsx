import React from 'react';
import Card from './Card';
import style from './styles/cards.module.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={style.container}>
              {
                cities && cities.map(obj =>(
                  <Card
                    key = {obj.id}
                    max = {obj.main.temp_max}
                    min = {obj.main.temp_min}
                    name = {obj.name}
                    img = {obj.weather[0].icon}
                    onClose ={() => alert(obj.name)}

                  />
                ))
              }

         </div>
};