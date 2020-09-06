import React, { Component } from 'react';

import Spiner from '../spiner';
import './planet-random.css';

export default class PlanetRandom extends Component{

    render(){
        // return (
        //     <Spiner />
        // )
        return(
            <div className = 'planet-random jumbotrom'>
                <img className='planet-image' src = 'https://starwars-visualguide.com/assets/img/planets/2.jpg' />
                <div>
                    <h4>Kashyyyk</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className = 'term'>Population</span>
                            <span>121212</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Rotation Repiod</span>
                            <span>12</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Diametr</span>
                            <span>145</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}