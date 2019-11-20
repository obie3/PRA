'use strict';

import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { View, Image, StyleSheet, TouchableOpacity,Text} from 'react-native';
import styles from './styles';
import {DisplayText} from '../../components'
import { StackActions, NavigationActions } from 'react-navigation';


export default class Error extends Component {
 
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
              source={require('../../assets/images/error.gif')}

            />
            <Text style={styles.paragraph}>
              {this.props.navigation.getParam('message')}
            </Text>

            <TouchableOpacity 
              onPress={this.handleTryAgain}
              style={styles.btnStyle}>
              <DisplayText              
                onPress={this.handleTryAgain}
                text = {'Try Again'}
                style = {StyleSheet.flatten(styles.btnText)}/> 
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}
