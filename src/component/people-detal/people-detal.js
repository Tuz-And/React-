import React, { Component } from 'react';
import SwapiService from '../../service/swap-service';

import './people-detal.css';

export default class PeopleDetal extends Component{
    swapiService = new SwapiService();

    state = {
        peoples:[], 
        hasError:false 
    }
    componentDidMount(){
        this.updataPeople();
    }
    updataPeople = () => {
        const{peopleId} = this.props;
        if(!peopleId){
            return;
        }
        this.swapiService.getPeople(peopleId)
        .then((peoples) => {
            this.setState({peoples})
        })
    }
    render(){
        const{id,name,hair_color,height,gender,birth_year,eye_color,mass,skin_color,homeworld} = this.state.peoples;

        return(
            <div className = 'people-detal jumbotrom d-flex align-items-start'>
                <img className='people-image' alt ="error" src = {`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}/>
                <div>
                    <h4>{name}</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className = 'term'>Gender </span>
                            <span>{gender}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Birth Year </span>
                            <span>{birth_year}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Eye Color </span>
                            <span>{eye_color}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Height </span>
                            <span>{height}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Mass</span>
                            <span>{mass}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Hair Color </span>
                            <span>{hair_color}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Skin Color </span>
                            <span>{skin_color}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Homeworld </span>
                            <span>{homeworld}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}