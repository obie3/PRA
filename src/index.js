'use strict';

import React, {Component} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import * as  Font  from 'expo-font';
import Navigator from './routes';
import colors from './assets/colors';
TextInput.defaultProps.selectionColor = colors.gold;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontsLoaded:false,
    };
  }
  componentDidMount() {

    (async() => {
      
      await Font.loadAsync({
      
        // 'Montserrat-Regular' : require('../src/assets/fonts/Montserrat-Regular.ttf'),
        'Roboto-Light' : require('../src/assets/fonts/Roboto-Light.ttf'),
        'Roboto-Medium' : require('../src/assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular' : require('../src/assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Thin' : require('../src/assets/fonts/Roboto-Thin.ttf'),      
        'Roboto-Black' : require('../src/assets/fonts/Roboto-Black.ttf'),
        'Montserrat-Bold' : require('../src/assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular' : require('../src/assets/fonts/Montserrat-Regular.ttf'),
      
      });
      
      this.setState({ fontsLoaded: true });
  
    })();
  }

  render() {
    const { fontsLoaded } = this.state

    return (
      <View style={styles.container}>
      {fontsLoaded ?
        <Navigator/>
        :
        null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    elevation: 4,
  },
});