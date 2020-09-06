import React,{Component} from 'react';

import PlanetRandom from '../planet-random';
import Header from '../header';
import PeopleDetal from '../people-detal';
import ItemList from '../item-list';

import './app.css';

const App = () =>{
    return(
        <div className='container'>
            {/* header */}
            < Header />
            {/* random planet */}
            < PlanetRandom />
            <div className='row'>
                <div className='col-6'>
                    {/* item list */}
                    < ItemList />
                </div>
                <div className='col-6'>
                    < PeopleDetal />
                    {/* persone details */}
                </div>
            </div>

        </div>
    )
}
export default App;