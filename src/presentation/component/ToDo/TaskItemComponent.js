import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

function TaskItemComponent(props) {
    return (
        <View style={Styles.taskItem}>
            <Text>{props.taskName}</Text>
        </View>
    );
}

export default TaskItemComponent;