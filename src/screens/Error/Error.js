'use strict';

import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { View, Image, StyleSheet, TouchableOpacity,Text} from 'react-native';
import styles from './styles';
import {DisplayText} from '../../components'

export default class Error extends Component {
 
  handleTryAgain =()=>{
    return this.props.navigation.navigate('Home');
  }
  render() {

    return (
      
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require('../../assets/images/error.gif')}
              /* source={require('../../assets/images/whiteLoader.gif')} */

            />
            <Text style={styles.paragraph}>
              {this.props.navigation.getParam('message')}
            </Text>

            <TouchableOpacity 
              onPress={this.handleSnap}
              style={styles.btnStyle}>
              <DisplayText              
                onPress={this.handleSnap}
                text = {'Try Again'}
                style = {StyleSheet.flatten(styles.btnText)}/> 
            </TouchableOpacity>

          </View>
        </View>
    );
  }
}
