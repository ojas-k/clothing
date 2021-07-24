import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';


import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {selectCurrentUser} from './redux/user/user.selectors';
import setCurrentUser from './redux/user/user.actions';
import ItemPage from './pages/itempage/itempage.component';




class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=> {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({currentUser:null})
      }
      
        });

        console.log('inside component did mount')
        console.log(window.location.href)

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    
  }




  render() {
    return (
      <div className='body'>
        {console.log('routing within app to homepage')}
        {console.log(window.location.href)}
        <Route to='/'/>
        {console.log('routed within app')}

        {console.log(window.location.href)}

        <Header/>
        <Switch>
          <Route exact path='/' component = {Homepage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
          
          <Route path={`/:collectionId`} component={ItemPage}/>
        </Switch>

      </div>

    )}
}


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);