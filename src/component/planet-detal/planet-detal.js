import React, { Component } from 'react';
import SwapiService from '../../service/swap-service';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';


import './planet-detal.css';

export default class PlanetDetal extends Component{
    swapiService = new SwapiService();

    state= {
        planet:[],
        hasError:false
    }
    componentDidMount(){
        this.updataPlanet()
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    componentDidUpdate(prevProps){ 
        if(this.props.planetId !== prevProps.planetId){
            this.updataPlanet();
        }
    }
    componentDidCatch(){
        this.setState({hasError:true})
    }
    updataPlanet =() => {
        const {planetId} = this.props;
        if(!planetId){
            return;
        }
        this.swapiService.getPlanet(planetId)
        .then((planet) => {
            this.setState({ planet })
        });
    }
    render(){
        const{name,id,population,diameter,rotationPeriod,orbital_period,gravity,terrain,surface_water,climate} = this.state.planet
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        if(!this.props.planetId){
            return(
                <span> Selected Planet </span>
            )
        }
        return(
            <div className = 'planet-detal jumbotrom d-flex align-items-start'>
                <img className='planet-image' alt ="error" src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4>{name}{this.props.planetId}</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <span className = 'term'>Population </span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Rotation Period </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Orbital Period </span>
                            <span>{orbital_period}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Diameter </span>
                            <span>{diameter}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Gravity</span>
                            <span>{gravity}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Terrain </span>
                            <span>{terrain}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Surface Water </span>
                            <span>{surface_water}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className = 'term'>Climate </span>
                            <span>{climate}</span>
                        </li>
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
}