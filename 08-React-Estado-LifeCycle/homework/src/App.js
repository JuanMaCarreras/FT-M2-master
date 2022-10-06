import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

function App() {
  const onSearch = (ciudad) => {
    axios(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then((response) => setCities(cities => [...cities, response.data]))
  }
    const [cities ,setCities] = useState([])

    const onClose =(id) => {
      setCities(cities => cities.filter(city => city.id !== id))
    }

  return (
    <div className="App">
      <div>
        <Nav onSearch = {onSearch}/>
      </div>
      
      <hr />
      <div>
        <Cards
          cities = {cities} onClose = {onClose}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
