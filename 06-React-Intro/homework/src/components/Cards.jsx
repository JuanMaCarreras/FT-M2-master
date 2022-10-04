import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div>
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