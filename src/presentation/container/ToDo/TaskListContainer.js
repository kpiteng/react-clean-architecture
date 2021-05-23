import { connect } from 'react-redux';
import TaskListComponent from '../../component/ToDo/TaskListComponent';

const mapStateToProps = ({ ToDo, loading }) => ({
    arrTasks: ToDo.arrTasks,
    loading: loading.effects.ToDo.fetchTasks,
  });
  
  const mapDispatchToProps = ({ 
      ToDo: { 
        fetchTasks,
        fetchTasksFromServer,
      } 
    }) => ({
        fetchTasks: () => fetchTasks(),
        fetchTasksFromServer: () => fetchTasksFromServer()
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);

  
