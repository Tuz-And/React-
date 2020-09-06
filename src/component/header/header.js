import React from 'react';

import './header.css';

const Header = ()=>{
    return(
        <div className = 'd-flex '>
            <h2>Star DB</h2>
            <div className = 'd-flex justify-content-around align-items-center heder-menu'>
                <a href='#'>People</a>
                <a href='#'>Planets</a>
                <a href='#'>Starships</a>
            </div>
        </div>
    )
}
export default Header;