'use strict';
import React, {Component} from 'react';
import { View, Image} from "react-native";
import {SubmitButton, DisplayText} from '../../components'
import Logo from  '../../assets/images/dicon.png';
import styles from './styles';
import * as Permissions from 'expo-permissions';
import { NavigationActions, StackActions } from 'react-navigation';


export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state ={
      hasPermission: null,
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.LOCATION,
    );
    this.setState({ hasPermission: status === 'granted' });
  }

  resetNavigationStack = (message, location) => {
    console.log({ 'hellloooo' : 'gggggg'})
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ 
        routeName: location, 
        params : { 'message': message}
     })],
    });  
    return this.props.navigation.dispatch(resetAction); 
  }

  onPress = () => {
    //return this.resetNavigationStack('where re you', 'Home');
  }
  render() {
    if (hasPermission === null) {
      return <View />;
    } 
    else if (hasPermission === false) {
      return this.resetNavigationStack('Grant Camera and Location Permission to Continue', 'Error');
    } 
    else {
      return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <DisplayText 
              style={styles.h1}
              text={'Hello..'}     
            />
            <DisplayText 
              style={styles.h2}
              text={'See a Pot-hole ?'}     
            />
            <DisplayText 
              style={styles.h2}
              text={'Dont Just Pass, Let us Know'}     
            />
          </View>
          <View style={styles.middleContainer}>
            <Image source={Logo} style={styles.image} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
              <SubmitButton
                title="START"
                style={styles.button}
                onPress={this.onPress}
                disabled={false}
              />
            </View>
          </View>
        </View>
      );
    }
  }
}