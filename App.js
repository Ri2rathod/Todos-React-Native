import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from './assets/style/title';
import Title_component from './components/title_component';
import Date_List from './components/date_list';



export default function App() {
  return (
    <View style={style.container} >
      <StatusBar style="auto" />
     
      <Title_component username="Ritesh"/>
      <Date_List />
      

    </View>
  );
}

