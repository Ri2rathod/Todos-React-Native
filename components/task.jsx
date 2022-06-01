import React, { useState } from 'react'
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import TasksStyle from '../assets/style/tasks.style';
import theme from '../assets/style/theme.variable';

export default function tasks({isComplated,task}) {
    const [isSelected, setSelection] = useState(isComplated);
    const [textDecore, settextDecore] = useState(!isComplated?'none':'line-through');

    const toggleChecked = () => {
        setSelection(value => !value)
        settextDecore(value => value == 'line-through' ? 'none' : 'line-through');
    };

    return (
        <View style={TasksStyle.tasks_container}>
            <CheckBox
                value={isSelected}
                onValueChange={toggleChecked}
                style={TasksStyle.checkbox}
                tintColors={{ true: theme.BACKGROUND_BG_SECOUNDARY, false: 'white' }}
            />
            <Text style={{ textDecorationLine: textDecore, fontSize: 16 }}> {task}  </Text>
        </View>
    )
}
