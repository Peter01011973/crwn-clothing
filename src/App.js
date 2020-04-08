import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/actions'
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log('didMount');
    
    const { setCurrentUser } = this.props;
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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
