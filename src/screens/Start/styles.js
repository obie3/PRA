import {Platform, StyleSheet} from 'react-native';
import color from '../../assets/colors';

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-between',
    //backgroundColor: colors.whiteShade,
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: color.green,
    fontSize: 40,
    fontFamily : 'Raleway-Medium'
  },
  h2: {
    color: color.green,
    fontSize: 18,
    marginTop: 8,
    fontFamily : 'Raleway-Regular'
  },

  image: {
    width: 250,
    height: 200,
    justifyContent: 'center',
  },

  buttonContainer: {
   // backgroundColor: '#008F68',
    borderRadius: 5,
    padding: 8,
    margin: 8,
  },

  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  middleContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
});