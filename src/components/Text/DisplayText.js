'use strict';

import React, {Component} from 'react';
import { Text, View, TouchableWithoutFeedback  } from 'react-native';
import PropTypes from 'prop-types';


export default class DisplayText extends Component { 
  render( ){
    const {disabled, text, onPress, style , numberOfLines, ellipsizeMode,} = this.props;
    const opacityStyle = disabled ? 0.2 : null;

    return(
      <View>
        <TouchableWithoutFeedback 
          disabled ={disabled}
          onPress = {onPress}
          style={{opacity: opacityStyle}}>

          <Text 
            style = {style}
            ellipsizeMode= {ellipsizeMode}
            numberOfLines = {numberOfLines}
          > 
            { text }
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

DisplayText.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
  
};