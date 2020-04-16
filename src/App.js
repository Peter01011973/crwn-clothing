import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import { auth, createUserProfileDocument, addCollectionAndDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/actions'; 
import { selectCurrentUser } from './redux/user/selector';
import Checkout from './pages/chechout/checkout';
import { selectCollectionForPreview } from './redux/shop/selectors';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsObject } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {

          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        })
      }
      setCurrentUser( userAuth )
      // addCollectionAndDocument('collections', collectionsObject.map(({ title, items}) =>({ title, items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' render={() =>( this.props.currentUser ? <Redirect to = '/' />  : <SignInAndSignUpPage /> ) } />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsObject: selectCollectionForPreview

})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
