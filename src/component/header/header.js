import React, { Component } from 'react';

import './header.css';

export default class Header extends Component{
    
    link = [
        { labal:'People', name:'people'},
        { labal:'Planet', name:'planet'},
        { labal:'Starship', name:'starship'},
    ]
    state = {
        showHide:''
    }
    onShowHide = ()=>{
        this.setState({
            showHide:this.state.showHide==''?'show':''
        });
        console.log(this.state.showHide)
    }
    render(){
        const {onSel,name} = this.props;
        const listLink = this.link.map(({labal,name}) =>{
            return (
                <a
                    href='#'
                    key={name}
                    onClick={() => this.props.onSel(name)}
                >{labal}</a>
            );
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

