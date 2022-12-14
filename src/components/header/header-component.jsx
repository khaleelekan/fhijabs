import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser})=>{
    return(
        <div className="header">
            <Link to='/'>
            <img src="/images/hijab-logo.png" alt="logo" width="150" height="100"></img>
            </Link>
            <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser?
                <div className="option" onClick={() => auth.signOut() }>SIGN OUT</div>
                :
                <Link className="option" to='/signin'>SIGN IN</Link>
            }
           
            </div>  
        </div>
    )
}

export default Header;