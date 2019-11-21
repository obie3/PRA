'use strict';

import React, {Component} from 'react';
import { View, Image, StyleSheet, TouchableOpacity,Text} from 'react-native';
import styles from './styles';
import {DisplayText} from '../../components'
import { StackActions, NavigationActions } from 'react-navigation';


export default class Success extends Component {
 
  handleTryAgain =()=>{
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
  
    return (
      
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require('../../assets/images/success.gif')}

            />
            <Text style={styles.paragraph}>
              {this.props.navigation.getParam('message') || 'Success, Thank you for the feedback'}
            </Text>

            <TouchableOpacity 
              onPress={this.handleTryAgain}
              style={styles.btnStyle}>
              <DisplayText              
                onPress={this.handleTryAgain}
                text = {'Another'}
                style = {StyleSheet.flatten(styles.btnText)}/> 
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}
