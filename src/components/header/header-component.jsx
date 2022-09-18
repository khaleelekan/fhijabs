import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss'

const Header = ()=>{
    return(
        <div className="header">
            <Link to='/'>
            <img src="/images/hijab-logo.png" alt="logo" width="150" height="100"></img>
            </Link>
            <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
           
            </div>  
        </div>
    )
}

export default Header;