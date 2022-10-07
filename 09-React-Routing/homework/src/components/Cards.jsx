import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(obj => <Card
          key={obj.id}
          max={obj.max}
          min={obj.min}
          name={obj.name}
          img={obj.img}
          onClose={() => onClose(obj.id)}
          id={obj.id}
        /> )}
    </div>
  );
}
