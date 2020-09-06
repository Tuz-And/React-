import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component{

    render(){

        return(
            <ul className='item-list'>
                <li className='item-list-li'> Skaiwoker </li>
                <li className='item-list-li'> Dart Wader </li>
                <li className='item-list-li'> R2-D2 </li>
            </ul>
        )
    }
}
