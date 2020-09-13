import React, { Component } from 'react';
import SwapiService from '../../service/swap-service';

import Spiner from '../spiner';
import './planet-random.css';

export default class PlanetRandom extends Component{

    swapiService = new SwapiService();
    
    state = {
        planet:{},
        loading:true,
        // id:5,
        // name: null,
        // population: null ,
        // rotationPeriod:null,
        // diameter: null
    }
    // constructor(){
    //     super();
    //     this.updatePlanet();
    //     this.interval = setInterval(this.updatePlanet,1500);
    //     //clearInterval(this.interval);
    // }
    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,7500);
  
    }
    onPlanetLoaded=(planet)=>{
        this.setState({ 
        planet, 
        loading:false,
     })
    }
    updatePlanet =()  => {
        const id = Math.floor(Math.random()*18)+3;
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded);
            
               
                // id,
                // name:planet.name,
                // population: planet.population ,
                // rotationPeriod:planet.rotation_period,
                // diameter: planet.diameter
           
        
    }

    render(){
        const {planet,  loading} =this.state
        // 
        const spinner = loading ? <Spiner /> : null;
        const content = !loading ? <PlanetView planet = {planet}/> : null;
        //  if(loading){
        //      return ( <Spiner /> )
        //  }
        return(

           
            <div className = 'planet-random jumbotrom'>
                {/* < PlanetView planet = {planet}/>*/}
                 {spinner}
                 {content}
            </div>
        )
    }
}
const PlanetView = ({planet}) =>{
    const {name, population, rotationPeriod, diameter, id } = planet
    return(
        <React.Fragment>
            <img className='planet-image' src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className = 'term'>Population</span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className = 'term'>Rotation Repiod</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className = 'term'>Diametr</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}