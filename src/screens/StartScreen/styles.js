import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import  Constants  from 'expo-constants';
import theme from '../../assets/theme';
export default styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : Constants.statusBarHeight,
    paddingBottom : 10, 
    alignItems : 'center',
  },
  logoIcon : {
    resizeMode : 'contain',
    height : '100%',
    width : '100%',
  },
  logoIcon2: {
    height : 90,
    width : 80,
    resizeMode : 'contain',
    // tintColor : colors.white
    // marginBottom : 50
  },
  logoText : {

    fontFamily : theme.primaryFont,
    fontSize :25,
    color : '#fff',
  },
  helloText : {
    fontFamily : theme.LightRoboto,
    fontSize : 30,
    color : '#fff',
    marginVertical: 8
  },
  logoView: {
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 70,
  },
  logoTextView :{
    justifyContent: 'center',
    alignItems : 'center',
    marginTop : 56,
    width : '100%'
  },
  btnStyle : {
    backgroundColor : colors.green,
    width : '50%',
    justifyContent: 'center',
    alignItems : 'center',
    height : 50,
    borderRadius : 4,
    marginTop: 16,
  },
  btnView : {
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    paddingLeft: 30,
    paddingRight: 30,
    position: 'absolute',
    bottom: 40
  },
  btnText : {
    fontSize: 20,
    color: theme.whiteShade,
    fontFamily: theme.headerFont,
    alignSelf: 'center',    
  },
});