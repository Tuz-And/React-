import React,{Component} from 'react';
import SwapiService from '../../service/swap-service';


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
    swapiService = new SwapiService();

    state = {
        data:[],
        selectedPlanet: 2,
        selectedPeople:1,
        selectedStarship:4,
        hasError:false,
        name:'planet'
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
        // this.itemSel(this.state.name);
        //  console.log('App=> ',this.state.data);
       
    }
    // itemSel(typeContent){
    //     // console.log('App=> ',typeContent);

    //     switch(typeContent){
    //         case 'people':{ return this.swapiService.getAllPeople().then((data)=>{
    //         this.setState({data})
    //         })}
    //         case 'planet':{ return this.swapiService.getAllPlanets().then((data)=>{
    //             this.setState({data})
    //         })}
    //         case 'starship':{ return this.swapiService.getAllStarships().then((data)=>{
    //             this.setState({data})
    //         })}
    //     }
        // console.log('App=> ',this.state.data);

    // }
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
                < Header name={this.state.name}
                    onSel={this.onSel}/>
                
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