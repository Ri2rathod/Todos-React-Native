import React from 'react';
import { Text,FlatList, View,ScrollView} from 'react-native';

export default function Date_List() {
    //Static data to displaty in list
    var date= new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  

    var DATA = [];

    date.setDate(date.getDate()-3);
    
    for (let i = 0; i < 5; i++) {
        date.setDate(date.getDate()+1);
        DATA.push([date.getDate(),days[date.getDay()]]);
    }

console.log(DATA);
   

    return (
  
        <View >
  
          <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={function (item){
            return(
              <View style={{padding:0,backgroundColor:'white',margin:8,borderRadius:100,width:65,height:65,alignItems:'center',justifyContent:'center'}} >
                <Text style={{color:"#000",textAlign:'center'}}>{item.item[0]}</Text>
                <Text  style={{color:"#000"}} >{item.item[1]}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item[1]}
          />
        </View>
    )
}

