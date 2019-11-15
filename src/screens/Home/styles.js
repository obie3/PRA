import {Platform, StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: 'transparent',
    // flexDirection: 'row',
  //   flex: 1,
  //  // backgroundColor: colors.black,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  },

  camera : {
    flex: 1,
  },

  capturebuttonLayout : {
    // flex: 1,
    // backgroundColor: 'transparent',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    height: '13%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    // paddingBottom: 4,
  },

  capturebutton : {
    // flex: 0.1,
    // alignSelf: 'flex-end',
    alignItems: 'center',
  },
  capturebutton1:{
    // flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderWidth: 4,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    padding: 2,
    marginBottom: 8,
  },
  topBar: {
    // flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start',
    height: '10%',
    width: '100%',
    position: 'absolute',
    top: 0,
    paddingLeft: 16,
  },

  text: {
    color: colors.gold,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    fontWeight: '200',
    marginLeft: 8,
  },
  cameraImage: {
    width: 55,
    height: 55,
    tintColor: '#ffffff',
    
  },
  falshView : {
    // flex: 0.1,
    // alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
  },
  flashImage: {
    width: 18,
    height: 18,
    tintColor: '#ffffff',
  }
});