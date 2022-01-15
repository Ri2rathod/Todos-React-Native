import React from 'react'
import { View, Text, FlatList } from 'react-native'
import themeStyle from '../assets/style/theme.style'
import cardlist from '../assets/style/cardlist';
import { IconButton, ProgressBar } from 'react-native-paper';
import themeVariable from '../assets/style/theme.variable';


export default function card_list() {

    // array ==['icon_name' , 'Title' ,'Number' ,'Out Of Number' , 'unit' ]
    let DATA = [['book', 'Reading', '80', '200' ,'Sheets' ], ['walk', 'Walking', '200' ,'250','Steps'],['camera' , 'Camera' , '5','50' ,'Click']];

    return (
        <View style={themeStyle.Appcomponent}>
            <FlatList
                style={cardlist.lists}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={function (item) {
                    return (
                        <View style={cardlist.card}>
                            <IconButton icon={item.item[0]} style={cardlist.icon} />
                            <Text style={{fontSize:18,marginBottom:8,fontFamily:themeVariable.OPENSANS_REGULAR}}>{item.item[1]}</Text>
                            <ProgressBar 
                                style={cardlist.progressBar}
                                color={themeVariable.COLOR_PRIMARY}
                                progress={eval(item.item[2]/item.item[3])}
                                visible='false'
                                 />
                            <Text style={cardlist.unit}>{ item.item[2]+' '+item.item[4]}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => item[1]}
            />
        </View>
    )
}
