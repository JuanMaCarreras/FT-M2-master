import React from 'react';
import Line from './Line';

export default function Network({ lines }){
    return (
        <div>
            {lines.map(obj => <Line name={obj.name} station={obj.station}/>)}
        </div>
    )
}