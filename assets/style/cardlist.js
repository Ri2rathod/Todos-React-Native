import { StyleSheet } from 'react-native';
import theme from './theme.variable';

export default StyleSheet.create({

    lists: {
        padding: 0,
        margin: 0,
        marginTop: -40,
        position: 'relative',
        marginHorizontal:-16,
        paddingHorizontal:16,
    },
    card: {
        backgroundColor: theme.COLOR_WHITE,
        padding: 16,
        paddingTop: 8,
        paddingBottom: 24,
        marginRight: 16,
        marginVertical: 15,
        marginLeft: 4,
        borderRadius: 25,
        width: 125,
        shadowColor: "#000",
        shadowOpacity: 0.050,
        shadowRadius: 4.65,

        elevation: 10,

    },
    icon: {
        backgroundColor: theme.COLOR_LIGHT,
        marginLeft: 0,
        marginBottom: 12,
    },
    progressBar: {
        marginVertical: 8,
        borderRadius: 5
    },
    unit: {
        color: theme.COLOR_GRAY,
        fontFamily: theme.OPENSANS_REGULAR
    }


});