import React, { Component } from 'react';

import './planet-detal.css';

export default class PlanetDetal extends Component{

    render(){
        return(
            <div className = 'planet-detal jumbotrom'>
                <img className='planet-image' src = 'https://starwars-visualguide.com/assets/img/planets/10.jpg' />
                <div>
                    <h4>R2-D2</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className = 'term'>Population </span>
                            <span>111111111</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Rotation Period </span>
                            <span>24 days</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Orbital Period </span>
                            <span>364 days</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Diameter </span>
                            <span>12,500km</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Gravity</span>
                            <span>1Standard</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Terrain </span>
                            <span>Grasslands, Mountains</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Surface Water </span>
                            <span>40%</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Climate </span>
                            <span>Temperate</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}