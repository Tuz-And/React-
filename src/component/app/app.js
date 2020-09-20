import React,{Component} from 'react';

import PlanetRandom from '../planet-random';
import Header from '../header';
import PeopleDetal from '../people-detal';
import StarshipsDdetal from '../starships-detal';
import PlanetDetal from '../planet-detal';
import ItemList from '../item-list';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';


import './app.css';

export default class App extends Component{
    state = {
        data:[],
        selectedPlanet: 2,
        selectedPeople:1,
        selectedStarship:4,
        hasError:false,
        name:'starship'
    }

    onItemSelected = (id) =>{
        // console.log(id)
        this.setState({
            selectedPlanet:id,
            selectedStarship:id,
            selectedPeople:id,
            
        })
    }
    onSel = (name) =>{
        
        this.setState({ name: name });
        console.log('App=> ',this.state.name);
    }
    componentDidCatch(){
        this.setState({
            hasError:true,
        })
    }
    render(){
        // console.log(this.props);
        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return(
            <div className='container'>
                {/* header */}
                < Header />
                
                {/* random planet */}
                < PlanetRandom /> 
                < ErrorButton />
                <div className='row'>
                    <div className='col-6'>
                        {/* item list */}
                       
                        < ItemList  onItemSelected = {this.onItemSelected} onSel={this.state.name}/>
                    </div>
                    <div className='col-6'>
                        {/* < PeopleDetal peopleId = {this.state.selectedPeople} /> */}
                        {/* persone details */}
                        {/* < StarshipsDdetal starshipId = {this.state.selectedStarship} /> */}
                        {/* < PlanetDetal planetId = {this.state.selectedPlanet} /> */}
                    </div>
                </div>

            </div>
        )
    }
}
