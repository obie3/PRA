'use strict';

import React, {Component} from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Linking, Text} from 'react-native';
import styles from './styles';
import {DisplayText} from '../../components'
import { StackActions, NavigationActions } from 'react-navigation';
import * as Permissions from 'expo-permissions';

export default class Network extends Component {
 
  handleTryAgain = async () => {
    const { status } = await Permissions.getAsync(
      Permissions.CAMERA,
      Permissions.LOCATION,
    );
    location = status ? 'Home' : 'StartScreen';

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
              source={require('../../assets/images/network.gif')}

            />
            <Text style={styles.paragraph}>
              {this.props.navigation.getParam('message')}
            </Text>

            <TouchableOpacity 
              onPress={this.handleTryAgain}
              style={styles.btnStyle}>
              <DisplayText              
                onPress={this.handleTryAgain}
                text = {'Go Back'}
                style = {StyleSheet.flatten(styles.btnText)}/> 
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}
