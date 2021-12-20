import React from 'react'
import { View, Text, FlatList } from 'react-native'
import themeStyle from '../assets/style/theme.style'
import cardlist from '../assets/style/cardlist';
import { IconButton, ProgressBar } from 'react-native-paper';


export default function card_list() {

    let DATA = [['book', 'Reading', '156'], ['walk', 'Walking', '200']];

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
                            <Text >{item.item[1]}</Text>
                            <ProgressBar
                                progress={0.5}
                                visible='false'
                                 />
                            <Text >{ item.item[2]}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => item[1]}
            />
        </View>
    )
}
