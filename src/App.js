import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




  render() {
    return (
      <div className='body'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        <Homepage/>
        </Switch>





      </div>

    )}
}

export default App;
