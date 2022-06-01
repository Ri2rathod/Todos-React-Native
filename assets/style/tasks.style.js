import { StyleSheet } from 'react-native';
import theme from './theme.variable';

export default StyleSheet.create({

    tasks_container: {
        marginTop: 8,
        backgroundColor: theme.COLOR_WHITE,
        paddingHorizontal: 12,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30
    },
    checkbox:{
        marginRight:6,
    }

});