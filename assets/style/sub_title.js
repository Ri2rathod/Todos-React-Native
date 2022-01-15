import { StyleSheet } from 'react-native';
import theme from './theme.variable';

export default StyleSheet.create({
  
  subtitle:{
    fontSize: 22,
    textAlign: 'left',
    color:theme.COLOR_BLACK,
    fontFamily:theme.OPENSANS_SEMIBOLD,
    letterSpacing: 0.1,
  },
  subsection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:4,
    marginVertical:8,
    alignItems:'center'
  }

});