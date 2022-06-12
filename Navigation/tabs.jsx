import React from 'react';
import {  BottomNavigation } from 'react-native-paper';

import Home from '../screens/Home';
import Setting from '../screens/Setting';
import themeVariable from '../assets/style/theme.variable';



export default function tabs() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home', color: themeVariable.COLOR_WHITE },
        { key: 'add', icon: 'plus', color: themeVariable.COLOR_LIGHT },
        { key: 'setting', title: 'Setting', icon: 'history', color: themeVariable.COLOR_LIGHT },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        add: Setting,
        setting: Setting,
    });
    return (
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                shifting={true}
                barStyle={{
                    position:'absolute',
                    backgroundColor:themeVariable.COLOR_WHITE,
                    marginVertical:8,
                    marginHorizontal:12,
                    borderRadius:50,
                    overflow: 'hidden',
                }}
                style={{backgroundColor:'black'}}

            />
    )
}