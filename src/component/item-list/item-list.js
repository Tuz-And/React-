import React, { Component } from 'react';
import SwapiService from '../../service/swap-service';

import './item-list.css';
import Spiner from '../spiner';

export default class ItemList extends Component{
    swapiService = new SwapiService();

    state = {
        planetList:null,
    }
    componentDidMount(){
        this.swapiService.getAllPlanets()
        .then((planetList)=>{
            this.setState({planetList})
        })
    }
    renderItem = (arr) =>{
        console.log(arr)
        return arr.map(({name,id}) => {
            return(
                <li className='item-list-li' key={id}>
                    {name}
                </li>
            )
        })
    }
    render(){
        const{planetList} = this.state;
       
        if (!planetList) {
            return <Spiner />
        } 
        const itemList = this.renderItem(planetList);
        return(
            <ul className='item-list'>
                {itemList}
            </ul>
        )
    }
}
