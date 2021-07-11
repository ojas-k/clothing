import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component'


class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <div className='body'>
        <Header/>
        <Homepage/>






      </div>

    )}
}

export default App;
