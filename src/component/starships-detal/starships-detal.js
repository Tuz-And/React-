import React, { Component } from 'react';
// import SwapiService from '../../service/swap-service';


import './starships-detal.css';

export default class StarshipsDdetal extends Component{

    render(){
        // swapiService = new SwapiService();




        return(
            <div className = 'starships-detal jumbotrom'>
                <img className='starships-image' src = 'https://starwars-visualguide.com/assets/img/starships/5.jpg' />
                <div>
                    <h4>Sentinel-class landing craft</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className = 'term'>Model </span>
                            <span>Sentinel-class landing craft </span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Manufacturer </span>
                            <span>Sienar Fleet Systems, </span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Class </span>
                            <span>Landing Craft</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Cost </span>
                            <span>240,000 credit</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Speed</span>
                            <span> 1,000km/h</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Hyperdrive Rating </span>
                            <span>1.0</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Length </span>
                            <span>38m</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}