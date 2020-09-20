import React, { Component } from 'react';

import './header.css';

export default class Header extends Component{
    link = [
        { labal:'People', name:'people'},
        { labal:'Planet', name:'planet'},
        { labal:'Starship', name:'starship'},
    ]

    render(){
        // const {onSel} = ;
        const listLink = this.link.map(({labal,name}) =>{
            // const content = ;
            return(
                
                <a 
                    href='#' 
                    key={name}
                    onClick = {()=> 
                        this.props.onSel(name).bind(this)
                        // console.log(name)
                    }
                    
                >{labal}</a>
            )
        })
        
        return(

            <div className = 'd-flex '>
                <h2>Star DB</h2>
                <div className = 'd-flex justify-content-around align-items-center heder-menu'>
                    {/* <a href='#'>People</a>
                    <a href='#'>Planets</a>
                    <a href='#'>Starships</a> */}
                    {listLink}
                </div>
            </div>
        )
    }
}

