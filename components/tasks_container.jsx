import React from 'react'
import { StyleSheet, Text, ScrollView, CheckBox } from 'react-native';
import Task from './task';

export default function tasks_container() {
    return (
        <ScrollView >
            <Task
                isComplated={false}
                task={'Lorem ipsum dolor sit amet.'} />
            <Task
                isComplated={true}
                task={'Lorem ipsum dolor sit amet.'} />
            <Task
                isComplated={false}
                task={'Lorem ipsum dolor sit amet.'} />
        </ScrollView >
    )
}
