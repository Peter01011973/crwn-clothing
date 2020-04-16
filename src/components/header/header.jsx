import React from 'react';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart/cart-dropdown';
import { selectHiddenCartDropdown } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/selector';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink
} from './header.styles';


const Header = ({ currentUser, hidden }) => {   
    
    return (
        <HeaderContainer>
            <LogoContainer to = '/'>
                <Logo className = 'logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to = '/shop'>SHOP</OptionLink>
                <OptionLink to = '/contact'>CONTACT</OptionLink>
                { currentUser 
                    ? 
                    <OptionLink as='div' onClick = {() => auth.signOut()}>SIGN OUT</OptionLink> 
                    : 
                    <OptionLink to = '/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {!hidden && <CartDropdown />}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHiddenCartDropdown
})

export default connect(mapStateToProps)(Header);
