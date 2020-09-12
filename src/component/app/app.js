import React,{Component} from 'react';

import PlanetRandom from '../planet-random';
import Header from '../header';
import PeopleDetal from '../people-detal';
import StarshipsDdetal from '../starships-detal';
import PlanetDetal from '../planet-detal';
import ItemList from '../item-list';

import './app.css';

export default class App extends Component{
    state = {
        selectedPlanet: null
    }

    onItemSelected = (id) =>{
        this.setState({
            selectedPlanet:id
        })
    }
    render(){
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
                        {/* < StarshipsDdetal /> */}
                        {/* < PlanetDetal /> */}
                    </div>
                </div>

            </div>
        )
    }
}
