'use strict';

import React, {Component} from 'react';
import { View, Image, StyleSheet,} from 'react-native';

export default class Network extends Component {
 
  render() {
    return (
      
        <View style={styles.wrapper}>
          <View style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require('../../assets/images/network.gif')}
            />
          </View>
          <Text style={styles.paragraph}>{this.props.navigation.getParam('message')}</Text>
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
