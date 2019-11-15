'use strict';

import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { View, Image, StyleSheet, Text} from 'react-native';

export default class Success extends Component {
 
  render() {
    return (
      
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require('../../assets/images/success.gif')}
            />
            <Text style={styles.paragraph}>{'Success!'}</Text>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
  },
  
  loaderImage: {
    width: 250,
    height: 250,
  },
});
