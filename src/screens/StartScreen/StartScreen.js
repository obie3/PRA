import React, { Component } from 'react';
import { View, SafeAreaView , Image, TouchableOpacity,StyleSheet} from 'react-native';
import styles from './styles';
import {DisplayText, AuthBackground} from '../../components';
import { NavigationActions, StackActions } from 'react-navigation';
import * as Permissions from 'expo-permissions';


class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ 
        routeName: location, 
        params : { 'message': message}
     })],
    });  
    return this.props.navigation.dispatch(resetAction); 
  }

  handleSnap = () => {
    const{hasPermission} = this.state;
    if (hasPermission === null) {
      return <View />;
    } 
    else if (hasPermission === false) {
      return this.resetNavigationStack('Grant Camera and Location Permission to Continue', 'Error');
    } 
    else{
      return this.resetNavigationStack('', 'Home');

    }
  }

  render() {
    return (
      <AuthBackground>
        <SafeAreaView style={styles.container}>  
          {/* <StatusBar barStyle="dark-content" />  */}

          <View style={styles.logoView}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={StyleSheet.flatten(styles.logoIcon2)}/> 
            <View style = {styles.logoTextView}>
              <DisplayText
                text = {'Hello'}
                style = {StyleSheet.flatten(styles.helloText)}/> 
              <DisplayText
                text = {'See a Pothole?'}
                style = {StyleSheet.flatten(styles.logoText)}/> 
              <DisplayText
                text = {'Don\'t Just Pass, Let us Know'}
                style = {StyleSheet.flatten(styles.logoText)}/> 
            </View>
          </View> 
          
          <View style = {styles.btnView}> 
          
            <TouchableOpacity 
              onPress={this.handleSnap}
              style={styles.btnStyle}>
              <DisplayText              
                onPress={this.handleSnap}
                text = {'Start'}
                style = {StyleSheet.flatten(styles.helloText)}/> 
            </TouchableOpacity>

          </View>         
        </SafeAreaView>
      </AuthBackground>
    );
    
  }
}

export default StartScreen;
