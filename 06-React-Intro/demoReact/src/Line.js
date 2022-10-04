import React from 'react';


export default function Line({ name, station }){
    return(
        <div>
            <h1>{name}</h1>
            <p>{station}</p>
        </div>
    )
}