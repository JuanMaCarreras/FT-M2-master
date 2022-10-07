import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx'
import { Route } from 'react-router-dom';


const apiKey = '7479319e474e86f0c7f383825bacc4eb';

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  console.log(cities)

  return (
    <div className="App">
      <Route path='/' >
        <Nav onSearch={onSearch}/>
      </Route>
      
      <Route exact path='/about' component={About} />

      <Route 
        exact 
        path='/ciudad/:id'
        render={({ match }) => <Ciudad ciudad={
          cities.filter(city => city.id === parseInt(match.params.id))[0]
        }/>}
      />
      
      <Route exact path='/' render={() => (
        <div>
          <Cards
            cities={cities}
            onClose={onClose}
          />
        </div>
      )}/>
      <hr />
    </div>
  );
}

export default App;
