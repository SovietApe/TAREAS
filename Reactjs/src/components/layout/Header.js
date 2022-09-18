import React from 'react';
import Logo from '../../public/images/logo.png'
const Header = (props) => {
    return(
        <header>
            <div className='holder'>
                <img src={Logo} width="100" alt="Transportes X"/>
                <h1>Transportes X</h1>
            </div>
        </header>
    );
}

export default Header;

