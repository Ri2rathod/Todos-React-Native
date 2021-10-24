import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title_component from './components/title_component';
import Date_List from './components/date_list';
import themeStyle from './assets/style/theme.style';



export default function App() {
  return (
    <View style={themeStyle.container} >
      <StatusBar style="auto" />
     
      <Title_component username="Ritesh"/>
      <Date_List />
      

    </View>
  );
}

