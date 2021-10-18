import { StyleSheet } from 'react-native';
import theme from './theme.variable';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_BG_SECOUNDARY ,
    paddingTop: 45 ,
    paddingLeft:16,
    paddingRight:16,

  },
  title:{
    fontSize: 32,
    textAlign: 'left',
    color:theme.COLOR_WHITE,
    fontFamily:theme.OSWALD_LIGHT,
    marginBottom:-7,
    paddingBottom:0,
  },

});