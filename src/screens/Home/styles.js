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
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems:'center',
    //justifyContent:'center'
    justifyContent:'space-evenly'
  },

  capturebutton : {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

  text: {
    color: colors.gold,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    fontWeight: '200',
    marginLeft: 8,
  },
});