import React from 'react';

function Card(prop) {
  // acá va tu código
  return (<div>
            <button onClick = {onClose}>X</button>
            <h4>{prop.name}</h4>
            <div>
              <p>Min</p>
              <p>{prop.min}</p>
              <p>Max</p>
              <p>{prop.max}</p>
            </div>
            <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`}/>
           </div>)
};

export default Card;