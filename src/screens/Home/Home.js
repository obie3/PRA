'use strict';
import React, {Component} from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {Preloader} from '../../components';
import styles from './styles';
import { Camera } from 'expo-camera';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Audio } from 'expo-av';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

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
      showLoading:false,
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
      return this.props.navigation.navigate('Error' , {
        'message' : 'Permssion to Get Locations Not Granted'
      });
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
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
      restoring : false,
    });
  }


  submitPhoto = async () => {
    this.showLoadingDialogue()
    let body = {
      'photo' : this.state.photo,
      'longitude' : this.state.longitude.toString,
      'latitude' : this.state.latitude,
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
    const { hasCameraPermission, type , flash, disabled} = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } 
    else if (hasCameraPermission === false) {
      return this.props.navigation.navigate('Error' , {
        'message' : 'Permssion Not Granted'
      });
    } 
    else {
      return (
        <View style={styles.container}>
          <Camera 
            style={styles.camera }
            flashMode={flash ? flash : Camera.Constants.FlashMode.off}
            autoFocus={Camera.Constants.AutoFocus.on}
            type={type}
            ref={ref => { this.camera = ref; }}
          >
            
            <View style={styles.capturebuttonLayout}>  
              <TouchableOpacity
                style={styles.capturebutton}
                onPress={this.retakePhoto}
                disabled={!disabled}
                >
                <MaterialIcons
                    name="replay"
                    size={42}
                    color={disabled ? "red" : "gray"}
                  />       
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.capturebutton}
                onPress={this.toggleFlash}>
                <Ionicons name="md-flashlight" 
                  size={42} 
                  color={flash ? "green" : "gray"}
                 />        
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.capturebutton}
                onPress={this.handlePhoto}
                disabled={disabled}>
                 <Ionicons 
                    name="ios-camera" 
                    size={42} 
                    color={disabled ? "gray" : "green"}
                    />          
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.capturebutton}
                onPress={this.submitPhoto}
                disabled={!disabled}
              >
                <Ionicons 
                  name="md-checkmark-circle-outline" 
                  size={42} 
                  color={disabled ? "green" : "gray"}
                />        
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


