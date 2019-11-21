'use strict';
import React, {Component} from 'react';
import { View, Image} from "react-native";
import {SubmitButton, DisplayText} from '../../components'
import Logo from  '../../assets/images/dicon.png';
import styles from './styles';

export default class Start extends Component {
  onPress = () => {
    return this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <DisplayText 
            style={styles.h1}
            text={'Hello..'}     
          />
          <DisplayText 
            style={styles.h2}
            text={'See a Pot-hole ?'}     
          />
          <DisplayText 
            style={styles.h2}
            text={'Dont Just Pass, Let us Know'}     
          />
        </View>
        <View style={styles.middleContainer}>
          <Image source={Logo} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <SubmitButton
              title="START"
              style={styles.button}
              onPress={() => this.onPress()}
              disabled={false}
            />
          </View>
        </View>
      </View>
    );
  }
}