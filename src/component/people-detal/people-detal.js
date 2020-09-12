import React, { Component } from 'react';
import SwapiService from '../../service/swap-service';

import './people-detal.css';

export default class PeopleDetal extends Component{
    swapiService = new SwapiService();

    state = {
        peoples:{},
    }
    render(){
        

        return(
            <div className = 'people-detal jumbotrom'>
                <img className='people-image' src = 'https://starwars-visualguide.com/assets/img/species/2.jpg' />
                <div>
                    <h4>R2-D2</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className = 'term'>Gender </span>
                            <span>male</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Birth Year </span>
                            <span>43</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Eye Color </span>
                            <span>red</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Height </span>
                            <span>red</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Mass</span>
                            <span>red</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Hair Color </span>
                            <span>red</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Skin Color </span>
                            <span>red</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Homeworld </span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}