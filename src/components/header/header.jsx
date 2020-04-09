import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart/cart-dropdown';
import { selectHiddenCartDropdown } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/selector';

const Header = ({ currentUser, hidden }) => {   
    
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
                    <div className = 'option' onClick = {() => {console.log('sign out');
                     auth.signOut()}}>SIGN OUT</div> 
                    : 
                    <NavLink to = '/signin' className = 'option'>SIGN IN</NavLink>
                }
                <CartIcon />
            </div>
            {!hidden && <CartDropdown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHiddenCartDropdown
})

export default connect(mapStateToProps)(Header);
