import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Header.css';

const Header = () => {
    return (
        <header className='header-main'>
            <div className='app-name'>
                 <Link to='/Home' className='Title'>Art of Cars</Link>
            </div>
            <div className='home-links'>
                <Link to='/Home' className='links'>Home</Link>
                {/* <Link to='/Vocab' className='links'>Vocab</Link> */}
                <Link to='/Settings' className='links'>Settings</Link>
            </div>
        </header>
    )
}

export default Header;