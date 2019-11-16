import React, { Component } from 'react';
import { View, SafeAreaView , Image, TouchableOpacity,StyleSheet} from 'react-native';
import styles from './styles';
import {DisplayText, AuthBackground, SubmitButton} from '../../components'
class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSnap = () => {
    return this.props.navigation.navigate('Home')
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
