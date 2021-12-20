import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title_component from './components/title_component';
import Date_List from './components/date_list';
import themeStyle from './assets/style/theme.style';
import Sub_title from './components/sub_title';
import Card_list from './components/card_list';


export default function App() {
  return (
    <View style={themeStyle.container} >
      <StatusBar style="auto" />
     
      <Title_component username="Ritesh"/>
      <Date_List />
      
      <Sub_title/>
      <Card_list/>
    </View>
  );
}

