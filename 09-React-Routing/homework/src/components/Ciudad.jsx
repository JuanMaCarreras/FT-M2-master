import React from 'react';


export default function Ciudad({ ciudad }){
    console.log(ciudad)
    return(
        <>
            <h1>{ciudad.name}</h1>
            <p>Max: {ciudad.max}</p>
            <p>Min: {ciudad.min}</p>
            <p>Weather: {ciudad.weather}</p>
            <p>Lat: {ciudad.latitud}</p>
            <p>Lon: {ciudad.longitud}</p>
            <img src={`http://openweathermap.org/img/wn/${ciudad.img}@2x.png`} alt='weather'/>
        </>
    )
}