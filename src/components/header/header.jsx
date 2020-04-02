import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {

    return (
        <div className = 'header'>
            <Link className = 'logo-container' to = '/'>
                <Logo className = 'logo'/>
            </Link>
            <div className="options">
                <NavLink to = '/shop' className = 'option'>SHOP</NavLink>
                <NavLink to = '/contact' className = 'option'>CONTACT</NavLink>
                { currentUser 
                    ? 
                    <div className = 'option' onClick = {() => auth.signOut()}>SIGN OUT</div> 
                    : 
                    <NavLink to = '/signin' className = 'option'>SIGN IN</NavLink>
                }
            </div>
        </div>
    )
}

export default Header
