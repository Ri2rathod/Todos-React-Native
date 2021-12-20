import React from 'react'
import { Text,View,Button } from 'react-native';
import style from '../assets/style/sub_title';
import { IconButton, Colors } from 'react-native-paper';
import themeVariable from '../assets/style/theme.variable';

export default function sub_title() {
    return (
        <View style={style.subsection}>
             <Text style={style.subtitle}>Your Habits</Text>
             <IconButton
                icon="plus"
                color={themeVariable.COLOR_LIGHT}
                size={25}
                style={{backgroundColor:themeVariable.COLOR_BLACK,margin:0}}
            />
        </View>
    )
}
