import React, { Component } from 'react';
import SwapiService from '../../service/swap-service';


import './starships-detal.css';

export default class StarshipsDdetal extends Component{
     swapiService = new SwapiService();

    state ={ 
        starship:[],
    }
    componentDidMount(){
        this.updataStarships();
    }
    updataStarships = () => {
        const{starshipId} =this.props;
        if(!starshipId){
            return;
        }
        this.swapiService.getStarship(starshipId)
        .then((starship) => {
            this.setState({starship})
        })
    }
    render(){
       
        const{id,name,model,manufacturer,starship_class,cost_in_credits,max_atmosphering_speed,hyperdrive_rating,length} = this.state.starship;
        
        return(
            <div className = 'starships-detal jumbotrom d-flex align-items-start'>
                <img className='starships-image' alt ="error" src = {`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />
                <div>
                    <h4>{name}</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className = 'term'>Model </span>
                            <span>{model} </span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Manufacturer </span>
                            <span>{manufacturer} </span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Class </span>
                            <span>{starship_class}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Cost </span>
                            <span>{cost_in_credits}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Speed</span>
                            <span> {max_atmosphering_speed}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Hyperdrive Rating </span>
                            <span>{hyperdrive_rating}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Length </span>
                            <span>{length}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}