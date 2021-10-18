import React from 'react'
import { Text} from 'react-native';
import style from '../assets/style/title';

function greeting_msg(){
    const date=new Date();
    var hours=date.getHours();
    return hours>12? "Good Evening," : "Good Morning," ;
}

export default function Title_component(props) {
    return (
        <>
            <Text style={style.title} > { greeting_msg()}</Text>
            <Text style={style.title} > { props.username } </Text>
        </>
    )
}
