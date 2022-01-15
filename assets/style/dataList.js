import react from "react";
import { Text,View ,StyleSheet} from "react-native";
import themeVariable from "./theme.variable";


export default StyleSheet.create({
    date_list: { 
        backgroundColor: themeVariable.COLOR_WHITE,
        borderRadius: 10, 
     },
    list_item: { 
        padding: 0, 
        margin: 8,
        marginRight:0,
        marginLeft:0,
        width: 65, 
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list_item_active: { 
        padding: 0, 
        backgroundColor:themeVariable.COLOR_BLACK, 
        borderRadius: 50, 
        marginLeft: 4,
        marginRight: 4,
        margin: 8, 
        width: 65, 
        height: 65, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        
    },
    list_item_text:{
        color:themeVariable.COLOR_BLACK,
        textAlign:'center',
        fontFamily:themeVariable.OPENSANS_SEMIBOLD
    },
    list_item_text_active:{
        color:themeVariable.COLOR_LIGHT,
        textAlign:'center',
        fontFamily:themeVariable.OPENSANS_SEMIBOLD,
        fontSize:15,
    }
});
