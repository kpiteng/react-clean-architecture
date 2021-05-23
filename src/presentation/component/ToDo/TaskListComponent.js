import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import TaskItemContainer from '../../container/ToDo/TaskItemContainer';

function TaskListComponent(props) {
    useEffect(() => {
        props.fetchTasks();
        props.fetchTasksFromServer();
    }, [])
    return (
        <FlatList
            data={props.arrTasks}
            renderItem={({ item, index }) =>
                <TaskItemContainer
                    {...item}
                />}
        />
    );
}

export default TaskListComponent;