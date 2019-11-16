'use strict';
import React, {Component} from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Preloader} from '../../components';
import styles from './styles';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Audio } from 'expo-av';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      flash: null,
      flashEnabled: false,
      disabled : false,
      photo : null,
      latitude: null,
      longitude: null,
      showLoading: false,

    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      // return this.props.navigation.navigate('Error' , {
      //   'message' : 'Permssion to Get Locations Not Granted'
      // });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ latitude: location.coords.latitude, 
      longitude: location.coords.longitude 
    });
  };


  handlePhoto = async () => {
    this.btnSound();
    const options = { quality: 1, base64: true,fixOrientation: true, exif: true};
    if (this.camera) {
      await this.camera.takePictureAsync(options)
        .then(photo => {
          photo.exif.Orientation = 1;  
          this.camera.pausePreview();     
          this.setState({photo : photo.base64, disabled : true});  
        });     
    }
  }

  onPictureSaved = async photo => {
    await this.props.savePhoto(photo);
  };

  retakePhoto = () => {
    this.camera.resumePreview(); 
   return  this.setState({disabled : false});  
  }


  toggleFlash = () => {
    if(!this.state.flashEnabled) {
      this.setState({flash: Camera.Constants.FlashMode.on, flashEnabled: true});
    } 
    else {
      this.setState({flash: Camera.Constants.FlashMode.off, flashEnabled: false});
    }
}

  btnSound = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../../assets/raw/camera.mp3'));
      await soundObject.setVolumeAsync(1.0);

      let status = await soundObject.playAsync();
        setTimeout(() => {
          soundObject.unloadAsync();
        }, status.playableDurationMillis + 1000);
    } catch (error) {
      console.warn(error);
    }
  }

  showLoadingDialogue(){
    return this.setState({
      showLoading : true,
    });
  }

  hideLoadingDialogue =async()=> {
    return this.setState({
      showLoading : false,
    });
  }

  handleBackPress = () => {
    console.log('hello clickcing back')
  }

  submitPhoto = async () => {
    this.showLoadingDialogue();
    let body = {
      'photo' :  'hellooooo......', //this.state.photo,
      'longitude' : this.state.longitude.toString(),
      'latitude' : this.state.latitude.toString(),
    };
    const settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      'body' : JSON.stringify(body),
    };  
    try {
      let response = await fetch(`${'https://pot-hole.herokuapp.com/api/reports/create'}`, settings);
      console.log({response})
      let res = await response.json();
      if(typeof res.data !== 'undefined') {
        this.hideLoadingDialogue().then(()=> {
          return this.props.navigation.navigate('Success');      
        });
      } 
      else {
        this.hideLoadingDialogue().then(()=> {
          return this.props.navigation.navigate('Error', {
            'message' : 'Oops Something went Wrong, Try again'
          });      
        })
        
      }
    } 
    catch(error){
      console.log({response})
      if(error.toString().includes('network')){
        this.hideLoadingDialogue().then(()=> {
          return this.props.navigation.navigate('Netwrok', {
            'message' : 'Check Internet Connection'
          });      
        })     
      }
      else {
        this.hideLoadingDialogue().then(()=> {
          return this.props.navigation.navigate('Error', {
            'message' : error.toString(),
          });      
        })
      }
    }    
  }

  render () {
    const { hasCameraPermission, type , flash, disabled, showLoading} = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } 
    else if (hasCameraPermission === false) {
      // return this.props.navigation.navigate('Error' , {
      //   'message' : 'Permssion Not Granted'
      // });
    } 
    else {
      return (
        <View style={styles.container}>
          <Camera 
            style={styles.camera }
            flashMode={flash ? flash : Camera.Constants.FlashMode.off}
            autoFocus={Camera.Constants.AutoFocus.on}
            type={type}
            ref={ref => { this.camera = ref; }}>

            <View style = {styles.topBar}>
              <TouchableOpacity
                style={styles.falshView}
                onPress={this.handleBackPress}>
                <Image
                  onPress={this.handleBackPress}
                  source = {require('../../assets/images/back.png')}
                  style = {StyleSheet.flatten(styles.flashImage)}
                />          
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.falshView}
                onPress={this.toggleFlash}>
                <Image
                  onPress={this.toggleFlash}
                  source = {require('../../assets/images/flash.png')}
                  style = {StyleSheet.flatten(styles.flashImage)}
                />          
              </TouchableOpacity>
            </View> 

            <View style={styles.capturebuttonLayout}>  
              <TouchableOpacity
                style={styles.capturebutton}
                onPress={this.retakePhoto}
                disabled={!disabled}>
                <Image
                  onPress={this.retakePhoto}
                  source = {require('../../assets/images/refresh.png')}
                  style = {StyleSheet.flatten(styles.refreshImage)}
                />      
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.capturebutton1 }
                onPress={this.handlePhoto}
                disabled={disabled}>
      
                <Image
                  onPress={this.handlePhoto}
                  source = {require('../../assets/images/circle.png')}
                  style = {StyleSheet.flatten(styles.cameraImage)}
                />         
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.capturebutton}
                onPress={this.submitPhoto}
                disabled={!disabled}>
                <Image
                  onPress={this.submitPhoto}
                  source = {require('../../assets/images/upload.png')}
                  style = {StyleSheet.flatten(styles.uploadImage)}/>    
              </TouchableOpacity>
            </View>
            <Preloader
              visible={this.state.showLoading}
            />
          </Camera>   
        </View>
      );
    }
  } 
} 


