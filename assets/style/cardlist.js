import { StyleSheet } from 'react-native';
import theme from './theme.variable';

export default StyleSheet.create({
  
    lists:{
        padding:0,
        margin:0,
        marginTop:-15
    },
    card:{
        backgroundColor:theme.COLOR_WHITE,
        padding:16,
        marginRight:16,
        borderRadius:16,

    },
    icon:{
        backgroundColor:theme.COLOR_LIGHT,
        marginLeft:0,
        marginBottom:12,
    }

});