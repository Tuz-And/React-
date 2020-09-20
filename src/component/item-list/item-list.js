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
        const typeContent = this.props.onSel;
        console.log('listItem =>  ',typeContent)
        switch(typeContent){
            case 'people':{ return this.swapiService.getAllPeople().then((data)=>{
            this.setState({data})
            })}
            case 'planet':{ return this.swapiService.getAllPlanets().then((data)=>{
                this.setState({data})
            })}
            case 'starship':{ return this.swapiService.getAllStarships().then((data)=>{
                this.setState({data})
            })}
        }
        // this.swapiService.getAllPlanets()
        // 
        // this.swapiService.getAllPlanets()
        
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
