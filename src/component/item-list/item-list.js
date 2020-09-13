import React, { Component } from 'react';
import SwapiService from '../../service/swap-service';

import './item-list.css';
import Spiner from '../spiner';

export default class ItemList extends Component{
    swapiService = new SwapiService();

    state = {
        data:null,
    }
    componentDidMount(){
        this.swapiService.getAllPlanets()
        .then((data)=>{
            this.setState({data})
        })
    }
    renderItem = (arr) =>{
        // console.log(arr)
        return arr.map(({name,id}) => {
            return(
                <li className='item-list-li' 
                key={id}
                onClick = {() =>this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }
    render(){
        const{data} = this.state;
       
        if (!data) {
            return <Spiner />
        } 
        const itemList = this.renderItem(data);
        return(
            <ul className='item-list'>
                {itemList}
            </ul>
        )
    }
}
