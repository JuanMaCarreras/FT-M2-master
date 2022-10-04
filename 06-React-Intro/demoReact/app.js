import React from 'react';
import ReactDOM from 'react-dom';
import Network from './src/Network';

const lines = [
    {
        name: 'Linea A',
        station: 'Retiro'
    },
    {
        name: 'Linea B',
        station: 'Constitución'
    },
    {
        name: 'Linea C',
        station: 'Once'
    },
    {
        name: 'Linea D',
        station: 'Tigre'
    }
]

function App(){
    return (
        <div>
            <Network lines={lines}/>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)