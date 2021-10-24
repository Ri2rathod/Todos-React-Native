import React from 'react';
import { Text,FlatList, View,ScrollView} from 'react-native';
import themeStyle from '../assets/style/theme.style';
import dataList from '../assets/style/dataList';

export default function Date_List() {
    //Static data to displaty in list
    let date= new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let today_date=date.getDate();

    let DATA = [];

    date.setDate(date.getDate()-3);
    
    for (let i = 0; i < 5; i++) {
        date.setDate(date.getDate()+1);
        DATA.push([date.getDate(),days[date.getDay()]]);
    }

console.log(DATA);
   

    return (
  
        <View style={themeStyle.Appcomponent}>
  
          <FlatList  
            style={dataList.date_list}  
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={function (item){
              return(
                <View style={item.item[0]==today_date?dataList.list_item_active:dataList.list_item} >
                  <Text style={item.item[0]==today_date?dataList.list_item_text_active:dataList.list_item_text}>{item.item[0]}</Text>
                  <Text  style={item.item[0]==today_date?dataList.list_item_text_active:dataList.list_item_text} >{item.item[1]}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item[1]}
          />
        </View>
    )
}

