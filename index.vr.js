import React,{Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Video,
} from 'react-vr';
import { MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import Home from './src/home'
import Work from './src/work'
import Portfolio from './src/portfolio'

class DJoleVR extends Component{
  render(){
    return(
      <Router>
        <View>
          <Route exact path='/' component={Home}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/home' component={Home}/>
        </View>
      </Router>
    )
  }
}

AppRegistry.registerComponent('DJoleVR', () => DJoleVR);