'use strict';

import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { View, Image, StyleSheet, Text} from 'react-native';

export default class Error extends Component {
 
  render() {

    return (
      
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require('../../assets/images/error.gif')}
              /* source={require('../../assets/images/whiteLoader.gif')} */

            />
            <Text style={styles.paragraph}>{this.props.navigation.getParam('message')}</Text>

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
