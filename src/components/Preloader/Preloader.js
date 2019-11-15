'use strict';

import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import { View,StyleSheet,} from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default class Preloader extends Component {
 
  render() {
    const {visible } = this.props;
    return (
     
      <View style={styles.wrapper}>
        <View style={styles.loaderContainer}>
        <AnimatedLoader
          visible={visible}
          overlayColor="rgba(255,255,255, 255)"
          source={require("../../assets/images/preloader.json")}
          animationStyle={styles.lottie}
          speed={1}
        />
          
        </View>
      </View>
    );
  }
}

Preloader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    //opacity : 0.9,
    alignItems : 'center',
  },

  lottie : {
    width: 150,
    height: 150
  }

});
