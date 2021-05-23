import React from 'react';
import { SafeAreaView } from 'react-native';
import TaskListContainer from '../../container/ToDo/TaskListContainer';
import Styles from './Styles';

function ToDoManagement() {
    return (
        <SafeAreaView style={Styles.container}>
            <TaskListContainer />
        </SafeAreaView>
    );
}

export default ToDoManagement;