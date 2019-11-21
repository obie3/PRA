import {Platform, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import theme from '../../assets/theme';

export default styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  paragraph:{
    textAlign: 'center',
    marginTop: 16,
    fontFamily: theme.LightRoboto,
    fontSize: 16,
    color: colors.green
  },
  wrapper: {
    justifyContent: 'center',
    alignItems : 'center',
  },
  
  loaderImage: {
    width: 250,
    height: 250,
  },
  loaderContainer: {
      height: '100%',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  btnStyle : {
    backgroundColor : colors.green,
    width : '50%',
    justifyContent: 'center',
    alignItems : 'center',
    height : 50,
    borderRadius : 4,
    marginTop: 40,
  },

  btnText : {
    fontFamily : theme.LightRoboto,
    fontSize : 25,
    color : '#fff',
    marginVertical: 8 
  },
});